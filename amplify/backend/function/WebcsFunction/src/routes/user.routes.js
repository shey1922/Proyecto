const { Router } = require("express");
const { getUsers, getUserById } = require("../controllers/user.controller");

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);

module.exports = router;