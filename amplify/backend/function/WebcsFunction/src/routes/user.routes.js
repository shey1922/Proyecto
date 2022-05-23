const { Router } = require("express");
const { getUsers, getUserById, getForumsByUser, getCommentsByUser, getEnrolledCourses } = require("../controllers/user.controller");

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.get('/:id/forums', getForumsByUser);
router.get('/:id/comments', getCommentsByUser);
router.get('/:id/courses', getEnrolledCourses);

module.exports = router;