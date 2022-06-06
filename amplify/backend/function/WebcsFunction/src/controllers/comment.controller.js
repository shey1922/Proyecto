const { v4 } = require('uuid');
const db = require('../db');

const createComment = (req, res) => {
    const { text, forumId, createdBy } = req.body;

    if (!text || !forumId || !createdBy) return res.status(400).json({ error: 'text or forumId or createdBy missing' });

    const date = new Date();
    const newComment = {
        id: v4(),
        text,
        forumId,
        createdBy,
        createdAt: date.toISOString(),
        updatedAt: date.toDateString()
    };

    const putItemParams = {
        TableName: 'CommentTable-dev',
        Item: newComment
    };

    db.put(putItemParams, (err, data) => {
        if (err) {
            res.status(500).json({error: err, url: req.url, body: req.body});
        } else {
            res.status(201).json({ message: 'Comment created successfully' });
        }
    })
}

const getComments = (req, res) => {
    db.scan({ TableName: 'CommentTable-dev' }, (err, data) => {
        if (err) {
            res.status(500).json({error: err, url: req.url, body: req.body});
        } else {
            res.status(200).json(data.Items);
        }
    });
}

module.exports = {
    createComment,
    getComments
}