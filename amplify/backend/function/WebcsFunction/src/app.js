/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_ANSWERTABLE_ARN
	STORAGE_ANSWERTABLE_NAME
	STORAGE_ANSWERTABLE_STREAMARN
	STORAGE_COMMENTTABLE_ARN
	STORAGE_COMMENTTABLE_NAME
	STORAGE_COMMENTTABLE_STREAMARN
	STORAGE_COURSETABLE_ARN
	STORAGE_COURSETABLE_NAME
	STORAGE_COURSETABLE_STREAMARN
	STORAGE_FORUMTABLE_ARN
	STORAGE_FORUMTABLE_NAME
	STORAGE_FORUMTABLE_STREAMARN
	STORAGE_MODULETABLE_ARN
	STORAGE_MODULETABLE_NAME
	STORAGE_MODULETABLE_STREAMARN
	STORAGE_QUESTIONTABLE_ARN
	STORAGE_QUESTIONTABLE_NAME
	STORAGE_QUESTIONTABLE_STREAMARN
	STORAGE_TESTTABLE_ARN
	STORAGE_TESTTABLE_NAME
	STORAGE_TESTTABLE_STREAMARN
	STORAGE_USERCOURSETABLE_ARN
	STORAGE_USERCOURSETABLE_NAME
	STORAGE_USERCOURSETABLE_STREAMARN
	STORAGE_USERTABLE_ARN
	STORAGE_USERTABLE_NAME
	STORAGE_USERTABLE_STREAMARN
	STORAGE_VIDEOTABLE_ARN
	STORAGE_VIDEOTABLE_NAME
	STORAGE_VIDEOTABLE_STREAMARN
Amplify Params - DO NOT EDIT *//*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require('express')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

const userRouter = require('./routes/user.routes');
const courseRouter = require('./routes/course.routes');
const moduleRouter = require('./routes/module.routes');
const videoRouter = require('./routes/video.routes');
const testRouter = require('./routes/test.routes');

// declare a new express app
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

app.use('/users', userRouter);
app.use('/courses', courseRouter);
app.use('/modules', moduleRouter);
app.use('/videos', videoRouter);
app.use('/tests', testRouter);

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
