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

module.exports = {
    addModule
}