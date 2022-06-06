const { Router } = require("express");
const { addQuestion, getAlternativesByQuestion, getCorrectAnswersByQuestion } = require("../controllers/question.controller");

const router = Router();

router.post('/', addQuestion);
router.get('/:id/alternatives', getAlternativesByQuestion);
router.get('/:id/correct-answers', getCorrectAnswersByQuestion);

module.exports = router;