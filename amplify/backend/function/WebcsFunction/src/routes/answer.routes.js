const { Router } = require("express");
const { addAnswer } = require("../controllers/answer.controller");

const router = Router();

router.post('/', addAnswer);

module.exports = router;