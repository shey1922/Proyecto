const { v4 } = require('uuid');
const db = require('../db');

const createForum = (req, res) => {
    const { subject, createdBy } = req.body;

    if (!subject || !createdBy) return res.status(400).json({ error: 'subject or createdBy missing' });

    const newForum = {
        id: v4(),
        subject,
        createdBy
    };

    const putItemParams = {
        TableName: 'ForumTable-dev',
        Item: newForum
    };

    db.put(putItemParams, (err, data) => {
        if (err) {
            res.status(500).json({error: err, url: req.url, body: req.body});
        } else {
            res.status(201).json({ message: 'Forum created successfully' });
        }
    })
}

const getForums = (req, res) => {
    db.scan({ TableName: 'ForumTable-dev' }, (err, data) => {
        if (err) {
            res.status(500).json({error: err, url: req.url, body: req.body});
        } else {
            res.status(200).json(data.Items);
        }
    });
}

const getCommentsByForum = (req, res) => {
    const { id } = req.params;

    const queryParams = {
        TableName: 'CommentTable-dev',
        IndexName: 'CommentForumGSI',
        KeyConditionExpression: 'forumId = :forumId',
        ExpressionAttributeValues: {
            ':forumId': id
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
    createForum,
    getForums,
    getCommentsByForum
}