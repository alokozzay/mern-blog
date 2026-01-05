const { Router } = require("express");
const userControllers = require("../controllers/usersControllers");
const router = new Router();

router.post("/register", userControllers.registerUser);
router.post("/login", userControllers.loginUser);
router.post("/change-avatar", userControllers.changeAvatar);
router.get("/authors", userControllers.getAuthors);
router.get("/:id", userControllers.getUser);
router.patch("/edit-user", userControllers.editUser);

module.exports = router;
