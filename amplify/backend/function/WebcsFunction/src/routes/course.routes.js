const { Router } = require("express");
const { getCourses, addCourse, getModulesByCourse } = require("../controllers/course.controller");

const router = Router();

router.get('/', getCourses);
router.post('/', addCourse);
router.get('/:id/modules', getModulesByCourse);

module.exports = router;