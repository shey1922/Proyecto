const { v4 } = require('uuid');
const db = require('../db');

const addQuestion = (req, res) => {
    const { statement, testId } = req.body;

    if (!statement || !testId) return res.status(400).json({ error: 'statement or testId missing' });

    const newQuestion = {
        id: v4(),
        statement,
        testId
    };

    const putItemParams = {
        TableName: 'QuestionTable-dev',
        Item: newQuestion
    };

    db.put(putItemParams, (err, data) => {
        if (err) {
            res.status(500).json({error: err, url: req.url, body: req.body});
        } else {
            res.status(201).json({ message: 'Question added successfully' });
        }
    })
}

const getAlternativesByQuestion = (req, res) => {
    const { id } = req.params;

    const queryParams = {
        TableName: 'AnswerTable-dev',
        IndexName: 'AnswerQuestionGSI',
        KeyConditionExpression: 'questionId = :questionId',
        ExpressionAttributeValues: {
            ':questionId': id
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

const getCorrectAnswersByQuestion = (req, res) => {
    const { id } = req.params;

    const queryParams = {
        TableName: 'AnswerTable-dev',
        IndexName: 'AnswerQuestionGSI',
        KeyConditionExpression: 'questionId = :questionId',
        ExpressionAttributeValues: {
            ':questionId': id,
            'correct': true
        },
        FilterExpression: 'isCorrect = :correct'
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
    addQuestion,
    getAlternativesByQuestion,
    getCorrectAnswersByQuestion
}