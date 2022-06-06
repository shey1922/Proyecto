const { v4 } = require('uuid');
const db = require('../db');

const createTest = (req, res) => {
    const { topic, moduleId, courseId } = req.body;

    if (!topic || !moduleId || !courseId) return res.status(400).json({ error: 'Missing data' });

    const date = new Date();
    const newTest = {
        id: v4(),
        topic,
        createdAt: date.toISOString(),
        updatedAt: date.toISOString(),
        moduleId,
        courseId
    };

    const putItemParams = {
        TableName: 'TestTable-dev',
        Item: newTest
    };

    db.put(putItemParams, (err, data) => {
        if (err) {
            res.status(500).json({error: err, url: req.url, body: req.body});
        } else {
            res.status(201).json({ message: 'Test created successfully' });
        }
    });
}

const getQuestionsByTest = (req, res) => {
    const { id } = req.params;

    const queryParams = {
        TableName: 'QuestionTable-dev',
        IndexName: 'QuestionTestGSI',
        KeyConditionExpression: 'testId = :testId',
        ExpressionAttributeValues: {
            ':testId': id
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

module.exports = {
    createTest,
    getQuestionsByTest
}