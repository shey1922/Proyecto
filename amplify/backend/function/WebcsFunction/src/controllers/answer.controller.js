const { v4 } = require("uuid");
const db = require("../db");

const tableName = "AnswerTable-test";

const addAnswer = (req, res) => {
  const { content, correct, questionId } = req.body;

  if (!content || !questionId)
    return res.status(400).json({ error: "Missing data" });

  const newAnswer = {
    id: v4(),
    content,
    correct,
    questionId,
  };

  const putItemParams = {
    TableName: tableName,
    Item: newAnswer,
  };

  db.put(putItemParams, (err, data) => {
    if (err) {
      res.status(500).json({ error: err, url: req.url, body: req.body });
    } else {
      res.status(201).json({ message: "Answer added successfully" });
    }
  });
};

module.exports = {
  addAnswer,
};
