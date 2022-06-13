const { v4 } = require("uuid");
const db = require("../db");
const { mapArrayToFilterExpression } = require("../util");

const tableName = "CourseTable-test";

const getCourses = (req, res) => {
  const scanParams = {
    TableName: tableName,
  };

  db.scan(scanParams, (err, data) => {
    if (err) {
      res.status(500).json({ error: "Could not load courses: " + err });
    } else {
      res.status(200).json(data.Items);
    }
  });
};

const addCourse = async (req, res) => {
  const { topic, description, modules, createdBy } = req.body;

  if (!topic || !description || !createdBy || modules?.length === 0)
    return res.status(400).json({ error: "missing data" });

  const date = new Date();

  const newCourse = {
    id: v4(),
    topic,
    description,
    active: true,
    createdBy,
    createdAt: date.toISOString(),
    updatedAt: date.toISOString(),
  };

  const newModules = modules.map((module) => ({
    id: v4(),
    name: module.name,
    description: module.description,
    courseId: newCourse.id,
    resources: module.resources,
  }));
  const newVideos = [];
  const newQuizzes = [];
  newModules.forEach((module) => {
    module.resources.forEach((resource) => {
      if (resource.type === "VIDEO") {
        newVideos.push({
          id: v4(),
          title: resource.title,
          url: resource.url,
          createdAt: date.toISOString(),
          updatedAt: date.toISOString(),
          courseId: newCourse.id,
          moduleId: module.id,
        });
      } else if (resource.type === "QUIZ") {
        newQuizzes.push({
          id: v4(),
          title: resource.title,
          courseId: newCourse.id,
          moduleId: module.id,
          questions: resource.questions,
        });
      }
    });
  });

  const newQuestions = [];
  newQuizzes.forEach((quiz) => {
    quiz.questions.forEach((question) => {
      newQuestions.push({
        id: v4(),
        statement: question.statement,
        testId: quiz.id,
        answers: question.answers,
      });
    });
  });

  const newAnswers = [];
  newQuestions.forEach((question) => {
    question.answers.forEach((answer) => {
      newAnswers.push({
        id: v4(),
        content: answer.content,
        correct: answer.correct,
        questionId: question.id,
        testId: question.testId,
      });
    });
  });

  const params = {
    RequestItems: {
      "CourseTable-test": [
        {
          PutRequest: {
            Item: newCourse,
          },
        },
      ],
      "ModuleTable-test": newModules.map(
        ({ id, name, description, courseId }) => ({
          PutRequest: {
            Item: {
              id,
              name,
              description,
              courseId,
            },
          },
        })
      ),
      "VideoTable-test": newVideos.map(
        ({ id, title, url, createdAt, updatedAt, courseId, moduleId }) => ({
          PutRequest: {
            Item: {
              id,
              title,
              url,
              createdAt,
              updatedAt,
              courseId,
              moduleId,
            },
          },
        })
      ),
      "TestTable-test": newQuizzes.map(({ id, title, moduleId, courseId }) => ({
        PutRequest: {
          Item: {
            id,
            title,
            moduleId,
            courseId,
          },
        },
      })),
      "QuestionTable-test": newQuestions.map(({ id, statement, testId }) => ({
        PutRequest: {
          Item: {
            id,
            statement,
            testId,
          },
        },
      })),
      "AnswerTable-test": newAnswers.map(
        ({ id, content, correct, questionId, testId }) => ({
          PutRequest: {
            Item: {
              id,
              content,
              correct,
              questionId,
              testId,
            },
          },
        })
      ),
    },
  };

  try {
    await db.batchWrite(params).promise();
    res.status(201).json({ message: "Course created successfully" });
  } catch (err) {
    res.status(500).json({ error: err, url: req.url, body: req.body });
  }
};

const enroll = (req, res) => {
  const { userId } = req.body;

  if (!userId) return res.status(400).json({ error: "userId is missing" });

  const enrollmentDate = new Date();

  const newEnrollment = {
    userId,
    courseId: req.params.id,
    enrollmentDate: enrollmentDate.toISOString(),
    completed: false,
  };

  const putParams = {
    TableName: "UserCourseTable-test",
    Item: newEnrollment,
  };

  db.put(putParams, (err, data) => {
    if (err) {
      res.status(500).json({ error: err, url: req.url, body: req.body });
    } else {
      res.status(201).json({ message: "Enrollment completed successfully" });
    }
  });
};

const getModulesByCourse = (req, res) => {
  const { id } = req.params;

  const queryParams = {
    TableName: "ModuleTable-test",
    IndexName: "ModuleGSI",
    KeyConditionExpression: "courseId = :courseId",
    ExpressionAttributeValues: {
      ":courseId": id,
    },
  };

  db.query(queryParams, (err, data) => {
    if (err) {
      res.status(500).json({ error: err, url: req.url, body: req.body });
    } else {
      res.status(200).json(data.Items);
    }
  });
};

const getVideosByCourse = (req, res) => {
  const { id } = req.params;

  const queryParams = {
    TableName: "VideoTable-test",
    IndexName: "VideoCourseIndex",
    KeyConditionExpression: "courseId = :courseId",
    ExpressionAttributeValues: {
      ":courseId": id,
    },
  };

  db.query(queryParams, (err, data) => {
    if (err) {
      res.status(500).json({ error: err, url: req.url, body: req.body });
    } else {
      res.status(200).json(data.Items);
    }
  });
};

const getTestsByCourse = (req, res) => {
  const { id } = req.params;

  const queryParams = {
    TableName: "TestTable-test",
    IndexName: "TestCourseGSI",
    KeyConditionExpression: "courseId = :courseId",
    ExpressionAttributeValues: {
      ":courseId": id,
    },
  };

  db.query(queryParams, (err, data) => {
    if (err) {
      res.status(500).json({ error: err, url: req.url, body: req.body });
    } else {
      res.status(200).json(data.Items);
    }
  });
};

const getParticipantsByCourse = async (req, res) => {
  const { id } = req.params;

  const queryParams = {
    TableName: "UserCourseTable-test",
    IndexName: "FilterUserIndex",
    KeyConditionExpression: "courseId = :courseId",
    ExpressionAttributeValues: {
      ":courseId": id,
    },
  };

  try {
    const { Items } = await db.query(queryParams).promise();
    const userIds = Items.map((item) => item.userId);
    const attributeValues = mapArrayToFilterExpression(userIds);
    const userScanParams = {
      TableName: "UserTable-test",
      FilterExpression: `id IN (${Object.keys(attributeValues).toString()})`,
      ExpressionAttributeValues: attributeValues,
    };
    const data = await db.scan(userScanParams).promise();
    res.status(200).json(data.Items);
  } catch (err) {
    res.status(500).json({ error: err, url: req.url, body: req.body });
  }
};

module.exports = {
  getCourses,
  addCourse,
  enroll,
  getModulesByCourse,
  getVideosByCourse,
  getTestsByCourse,
  getParticipantsByCourse,
};
