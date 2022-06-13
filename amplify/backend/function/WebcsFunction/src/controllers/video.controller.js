const { v4 } = require("uuid");
const db = require("../db");

const TableName = "VideoTable-test";

const addVideo = (req, res) => {
  const { title, url, duration, moduleId, courseId } = req.body;

  if (!title || !url || !duration || !moduleId || !courseId)
    return res.status(400).json({ error: "Missing data" });

  const date = new Date();
  const newVideo = {
    id: v4(),
    title,
    url,
    duration,
    createdAt: date.toISOString(),
    updatedAt: date.toISOString(),
    moduleId,
    courseId,
  };

  const putItemParams = {
    TableName,
    Item: newVideo,
  };

  db.put(putItemParams, (err, data) => {
    if (err) {
      res.status(500).json({ error: err, url: req.url, body: req.body });
    } else {
      res.status(201).json({ message: "Video created successfully" });
    }
  });
};

const getVideos = (req, res) => {
  db.scan({ TableName }, (err, data) => {
    if (err) {
      res.status(500).json({ error: "Could not load videos: " + err });
    } else {
      res.status(201).json(data.Items);
    }
  });
};

module.exports = {
  addVideo,
  getVideos,
};
