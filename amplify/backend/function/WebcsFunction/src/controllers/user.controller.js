const db = require('../db');
const { mapArrayToFilterExpression } = require('../util');

const getUsers = (req, res) => {

    const scanParams = {
        TableName: 'UserTable-dev'
    }

    db.scan(scanParams, function(err, data){
        if (err) {
            res.status(500).json({ error: 'Could not load users: ' + err });
        } else {
            res.status(200).json(data.Items);
        }
    });
}

const getUserById = (req, res) => {
    const { id } = req.params;

    const getItemParams = {
        TableName: 'UserTable-dev',
        Key: { id }
    }

    db.get(getItemParams, (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Could not load user: ' + err });
        } else {
            if (data.Item) {
                res.status(200).json(data.Item);
            } else {
                res.status(404).json({ error: 'User does not exist' });
            }
        }
    });
}

const getCommentsByUser = (req, res) => {
    const { id } = req.params;

    const queryParams = {
        TableName: 'CommentTable-dev',
        IndexName: 'CommentUserIndex',
        KeyConditionExpression: 'userId = :userId',
        ExpressionAttributeValues: {
            ':userId': id
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

const getForumsByUser = (req, res) => {
    const { id } = req.params;

    const queryParams = {
        TableName: 'ForumTable-dev',
        IndexName: 'ForumUserIndex',
        KeyConditionExpression: 'userId = :userId',
        ExpressionAttributeValues: {
            ':userId': id
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

const getEnrolledCourses = async (req, res) => {
    const { id } = req.params;

    const queryParams = {
        TableName: 'UserCourseTable-dev',
        KeyConditionExpression: 'userId = :userId',
        ExpressionAttributeValues: {
            ':userId': id
        }
    }

    const { Items } = await db.query(queryParams).promise();
    const courseIds = Items.map(item => item.courseId);
    const attributeValues = mapArrayToFilterExpression(courseIds);

    const courseScanParams = {
        TableName: 'CourseTable-dev',
        FilterExpression: `id IN (${Object.keys(attributeValues).toString()})`,
        ExpressionAttributeValues: attributeValues
    };

    try {
        const data = await db.scan(courseScanParams).promise();
        res.status(200).json(data.Items);
    } catch (err) {
        res.status(500).json({error: err, url: req.url, body: req.body});
    }
    
}

module.exports = {
    getUsers,
    getUserById,
    getCommentsByUser,
    getForumsByUser,
    getEnrolledCourses
}