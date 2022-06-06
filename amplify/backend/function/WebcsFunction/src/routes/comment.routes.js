const { Router } = require("express");
const { createComment, getComments } = require("../controllers/comment.controller");

const router = Router();

router.post('/', createComment);
router.get('/', getComments);

module.exports = router;