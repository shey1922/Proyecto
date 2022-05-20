const { Router } = require("express");
const { getUsers, getUserById, getForumsByUser, getCommentsByUser } = require("../controllers/user.controller");

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/:id/forums', getForumsByUser);
router.get('/:id/comments', getCommentsByUser);

module.exports = router;