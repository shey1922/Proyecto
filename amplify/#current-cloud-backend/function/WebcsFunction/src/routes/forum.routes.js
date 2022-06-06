const { Router } = require("express");
const { createForum, getForums } = require("../controllers/forum.controller");

const router = Router();

router.post('/', createForum);
router.get('/', getForums);

module.exports = router;