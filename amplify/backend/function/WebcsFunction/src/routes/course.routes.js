const { Router } = require("express");
const { getCourses, addCourse, getModulesByCourse, getVideosByCourse, getTestsByCourse } = require("../controllers/course.controller");

const router = Router();

router.get('/', getCourses);
router.post('/', addCourse);
router.get('/:id/modules', getModulesByCourse);
router.get('/:id/videos', getVideosByCourse);
router.get('/:id/tests', getTestsByCourse);

module.exports = router;