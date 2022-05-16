const db = require('../db');

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

module.exports = {
    getUsers,
    getUserById
}