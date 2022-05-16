const { Router } = require("express");
const { addModule } = require("../controllers/module.controller");

const router = Router();

router.post('/', addModule);

module.exports = router;