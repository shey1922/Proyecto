var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
    
    let date = new Date();

    if (event.request.userAttributes.sub) {

        let params = {
            Item: {
                'id': {S: event.request.userAttributes.sub},
                'firstName': {S: event.request.userAttributes.given_name},
                'lastName': {S: event.request.userAttributes.family_name},
                'email': {S: event.request.userAttributes.email},
                'isAdmin': {BOOL: false},
                'createdAt': {S: date.toISOString()},
                'updatedAt': {S: date.toISOString()},
            },
            TableName: process.env.STORAGE_USERTABLE_NAME
        };

        // Call DynamoDB
        try {
            await ddb.putItem(params).promise()
            console.log("Success");
        } catch (err) {
            console.log("Error", err);
        }

        console.log("Success: Everything executed correctly");
        context.done(null, event);

    } else {
        // Nothing to do, the user's email ID is unknown
        console.log("Error: Nothing was written to DynamoDB");
        context.done(null, event);
    }
};
