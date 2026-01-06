const { Router } = require("express");
const userControllers = require("../controllers/usersControllers");
const { body } = require("express-validator");
const router = new Router();

router.post(
    "/register",
    body("email").isEmail().withMessage("Uncorrect email"),
    body("password")
        .isLength({ min: 3, max: 16 })
        .withMessage("Password must be longer than 3 and shorted than 16"),
    body("name").notEmpty().withMessage("Name is required"),
    userControllers.registerUser
);
router.post("/login", userControllers.loginUser);
router.post("/change-avatar", userControllers.changeAvatar);
router.post("/logout", userControllers.logoutUser);
router.get("/authors", userControllers.getAuthors);
router.get("/:id", userControllers.getUser);
router.get("/refresh", userControllers.refresh);
router.patch("/edit-user", userControllers.editUser);

module.exports = router;
