const router = require("express").Router();
const userController = require("../controllers/User")

router.get("/", userController.read);
router.post("/", userController.insert);

module.exports = router;