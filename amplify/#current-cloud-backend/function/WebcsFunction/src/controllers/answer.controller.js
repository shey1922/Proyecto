const { v4 } = require('uuid');
const db = require('../db');

const addAnswer = (req, res) => {
    const { content, isCorrect, questionId } = req.body;

    if (!content || !isCorrect || !questionId) return res.status(400).json({ error: 'Missing data' });

    const newAnswer = {
        id: v4(),
        content,
        isCorrect,
        questionId
    };

    const putItemParams = {
        TableName: 'AnswerTable-dev',
        Item: newAnswer
    };

    db.put(putItemParams, (err, data) => {
        if (err) {
            res.status(500).json({error: err, url: req.url, body: req.body});
        } else {
            res.status(201).json({ message: 'Answer added successfully' });
        }
    })
}

module.exports = {
    addAnswer
}