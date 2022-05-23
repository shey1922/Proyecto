const { Router } = require("express");
const { getCourses, addCourse, getModulesByCourse, getVideosByCourse, getTestsByCourse, enroll, getParticipantsByCourse } = require("../controllers/course.controller");

const router = Router();

router.get('/', getCourses);
router.post('/', addCourse);
router.post('/:id/enroll', enroll);
router.get('/:id/modules', getModulesByCourse);
router.get('/:id/videos', getVideosByCourse);
router.get('/:id/tests', getTestsByCourse);
router.get('/:id/participants', getParticipantsByCourse);

module.exports = router;