const { Router } = require("express");
const { addVideo } = require("../controllers/video.controller");

const router = Router();

router.post('/', addVideo);

module.exports = router;