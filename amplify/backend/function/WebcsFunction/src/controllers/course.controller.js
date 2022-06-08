const { v4 } = require("uuid");
const db = require("../db");
const { mapArrayToFilterExpression } = require("../util");

const getCourses = (req, res) => {
  const scanParams = {
    TableName: "CourseTable-dev",
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

  if (!topic || !description || !createdBy || modules.length === 0)
    return res.status(400).json({ error: "missing data" });

  const date = new Date();

  const newCourse = {
    id: v4(),
    topic,
    active: true,
    createdBy,
    createdAt: date.toISOString(),
    updatedAt: date.toISOString(),
  };

  const putParams = {
    TableName: "CourseTable-dev",
    Item: newCourse,
  };

  try {
    await db.put(putParams).promise();
    // modules.forEach(async (module) => {
    //   const newModule = {
    //     id: v4(),
    //     name: module.name,
    //     description: module.description,
    //     courseId: newCourse.id,
    //   };

    //   await db.put({ TableName: "ModuleTable-dev", Item: newModule }).promise();
    //   module.resources.forEach(async (resource) => {
    //     if (resource.type === "VIDEO") {
    //       const newVideo = {
    //         id: v4(),
    //         title: resource.title,
    //         url: resource.url,
    //         createdAt: date.toISOString(),
    //         updatedAt: date.toISOString(),
    //         moduleId: newModule.id,
    //         courseId: newCourse.id,
    //       };
    //       await db
    //         .put({ TableName: "VideoTable-dev", Item: newVideo })
    //         .promise();
    //     } else if (resource.type === "QUIZ") {
    //       const newTest = {
    //         id: v4(),
    //         title: resource.title,
    //         moduleId: newModule.id,
    //         courseId: newCourse.id,
    //       };
    //       await db.put({ TableName: "TestTable-dev", Item: newTest });
    //       resource.questions.forEach(async);
    //     }
    //   });
    // });
    res.status(201).json({ message: "Course Created Successfuly" });
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
    TableName: "UserCourseTable-dev",
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
    TableName: "ModuleTable-dev",
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
    TableName: "VideoTable-dev",
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
    TableName: "TestTable-dev",
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
    TableName: "UserCourseTable-dev",
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
      TableName: "UserTable-dev",
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
