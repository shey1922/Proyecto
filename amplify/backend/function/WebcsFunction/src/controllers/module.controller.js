const { v4 } = require("uuid");
const db = require('../db');

const addModule = (req, res) => {
    const { name, description, courseId } = req.body;

    if (!name || !courseId) return res.status(400).json({ error: 'name or courseId is missing' });

    const putParams = {
        TableName: 'ModuleTable-dev',
        Item: {
            id: v4(),
            name,
            description,
            courseId
        }
    }

    db.put(putParams, (err, data) => {
        if (err) {
            res.status(500).json({error: err, url: req.url, body: req.body});
        } else {
            res.status(201).json({ message: 'Module created successfully' });
        }
    });
}

const getVideosByModule = (req, res) => {
    const { id } = req.params;

    const queryParams = {
        TableName: 'VideoTable-dev',
        IndexName: 'VideoModuleGSI',
        KeyConditionExpression: 'moduleId = :moduleId',
        ExpressionAttributeValues: {
            ':moduleId': id
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

const getTestsByModule = (req, res) => {
    const { id } = req.params;

    const queryParams = {
        TableName: 'TestTable-dev',
        IndexName: 'TestModuleGSI',
        KeyConditionExpression: 'moduleId = :moduleId',
        ExpressionAttributeValues: {
            ':moduleId': id
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
    addModule,
    getVideosByModule,
    getTestsByModule
}