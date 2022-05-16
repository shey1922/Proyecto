const { Router } = require("express");
const { addModule, getVideosByModule, getTestsByModule } = require("../controllers/module.controller");

const router = Router();

router.post('/', addModule);
router.get('/:id/videos', getVideosByModule);
router.get('/:id/tests', getTestsByModule);

module.exports = router;