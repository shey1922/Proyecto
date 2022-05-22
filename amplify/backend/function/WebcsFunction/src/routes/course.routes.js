const { Router } = require("express");
<<<<<<< Updated upstream
const { getCourses, addCourse, getModulesByCourse, getVideosByCourse, getTestsByCourse } = require("../controllers/course.controller");
=======
const { getCourses, addCourse, getModulesByCourse, getVideosByCourse, getTestsByCourse, enroll, getParticipantsByCourse } = require("../controllers/course.controller");
>>>>>>> Stashed changes

const router = Router();

router.get('/', getCourses);
router.post('/', addCourse);
<<<<<<< Updated upstream
router.get('/:id/modules', getModulesByCourse);
router.get('/:id/videos', getVideosByCourse);
router.get('/:id/tests', getTestsByCourse);
=======
router.post('/:id/enroll', enroll);
router.get('/:id/modules', getModulesByCourse);
router.get('/:id/videos', getVideosByCourse);
router.get('/:id/tests', getTestsByCourse);
router.get('/:id/participants', getParticipantsByCourse);
>>>>>>> Stashed changes

module.exports = router;