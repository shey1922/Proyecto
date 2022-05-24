const { v4 } = require('uuid');
const db = require('../db');
const { mapArrayToFilterExpression } = require('../util');

const getCourses = (req, res) => {
    const scanParams = {
        TableName: 'CourseTable-dev'
    }

    db.scan(scanParams, (err, data) => {
        if (err) {
            res.status(500).json({error: 'Could not load courses: ' + err});
        } else {
            res.status(200).json(data.Items);
        }
    });
}

const addCourse = (req, res) => {
    const {
        topic,
        createdBy
    } = req.body;

    if (!topic || !createdBy) return res.status(400).json({ error: 'topic or createdBy is missing' });

    const date = new Date();

    const newCourse = {
        id: v4(),
        topic,
        active: true,
        createdBy,
        createdAt: date.toISOString(),
        updatedAt: date.toISOString()
    }

    const putParams = {
        TableName: 'CourseTable-dev',
        Item: newCourse
    }

    db.put(putParams, (err, data) => {
        if (err) {
            res.status(500).json({error: err, url: req.url, body: req.body});
        } else {
            res.status(201).json({ message: 'Course added successfully' });
        }
    });
}

const enroll = (req, res) => {
    const { userId } = req.body;

    if (!userId) return res.status(400).json({ error: 'userId is missing' });

    const enrollmentDate = new Date();

    const newEnrollment = {
        userId,
        courseId: req.params.id,
        enrollmentDate: enrollmentDate.toISOString(),
        completed: false
    };

    const putParams = {
        TableName: 'UserCourseTable-dev',
        Item: newEnrollment
    };

    db.put(putParams, (err, data) => {
        if (err) {
            res.status(500).json({error: err, url: req.url, body: req.body});
        } else {
            res.status(201).json({ message: 'Enrollment completed successfully' });
        }
    });
}

const getModulesByCourse = (req, res) => {

    const { id } = req.params;

    const queryParams = {
        TableName: 'ModuleTable-dev',
        IndexName: 'ModuleGSI',
        KeyConditionExpression: 'courseId = :courseId',
        ExpressionAttributeValues: {
            ':courseId': id
        }
    };

    db.query(queryParams, (err, data) => {
        if (err) {
            res.status(500).json({error: err, url: req.url, body: req.body});
        } else {
            res.status(200).json(data.Items);
        }
    });
}

const getVideosByCourse = (req, res) => {
    const { id } = req.params;

    const queryParams = {
        TableName: 'VideoTable-dev',
        IndexName: 'VideoCourseIndex',
        KeyConditionExpression: 'courseId = :courseId',
        ExpressionAttributeValues: {
            ':courseId': id
        }
    };

    db.query(queryParams, (err, data) => {
        if (err) {
            res.status(500).json({error: err, url: req.url, body: req.body});
        } else {
            res.status(200).json(data.Items);
        }
    });
}

const getTestsByCourse = (req, res) => {
    const { id } = req.params;

    const queryParams = {
        TableName: 'TestTable-dev',
        IndexName: 'TestCourseGSI',
        KeyConditionExpression: 'courseId = :courseId',
        ExpressionAttributeValues: {
            ':courseId': id
        }
    };

    db.query(queryParams, (err, data) => {
        if (err) {
            res.status(500).json({error: err, url: req.url, body: req.body});
        } else {
            res.status(200).json(data.Items);
        }
    });
}

const getParticipantsByCourse = async (req, res) => {
    const { id } = req.params;

    const queryParams = {
        TableName: 'UserCourseTable-dev',
        IndexName: 'FilterUserIndex',
        KeyConditionExpression: 'courseId = :courseId',
        ExpressionAttributeValues: {
            ':courseId': id
        }
    }

    const { Items } = await db.query(queryParams).promise();
    console.log(Items);

    const userScanParams = {
        TableName: 'UserTable-dev',
        FilterExpression: 'contains (id, :ids)',
        ExpressionAttributeValues: {
            ':ids': Items.map(r => r.userId)
        }
    }

    try {
        const data = await db.scan(userScanParams).promise();
        res.status(200).json(data.Items);
    } catch (err) {
        res.status(500).json({error: err, url: req.url, body: req.body});
    }
}

module.exports = {
    getCourses,
    addCourse,
    enroll,
    getModulesByCourse,
    getVideosByCourse,
    getTestsByCourse,
    getParticipantsByCourse
}