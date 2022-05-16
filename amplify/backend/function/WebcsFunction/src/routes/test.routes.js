const { Router } = require('express');
const { createTest, getQuestionsByTest } = require('../controllers/test.controller');

const router = Router();

router.post('/', createTest);
router.get('/:id/questions', getQuestionsByTest);

module.exports = router;