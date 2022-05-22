const { Router } = require("express");
<<<<<<< Updated upstream
const { getUsers, getUserById } = require("../controllers/user.controller");
=======
const { getUsers, getUserById, getForumsByUser, getCommentsByUser, getEnrolledCourses } = require("../controllers/user.controller");
>>>>>>> Stashed changes

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
<<<<<<< Updated upstream
=======
router.get('/:id/forums', getForumsByUser);
router.get('/:id/comments', getCommentsByUser);
router.get('/:id/courses', getEnrolledCourses);
>>>>>>> Stashed changes

module.exports = router;