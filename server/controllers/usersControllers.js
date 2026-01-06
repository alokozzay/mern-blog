const HttpError = require("../models/errorModule");
const UserModel = require("../models/userModel.js");
const UserService = require("../service/userService.js");

class UsersControllers {
    // POST api/users/register - registration
    async registerUser(req, res, next) {
        try {
            const { name, email, password, confrimPassword } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(new HttpError("validation error"), errors.array());
            }
            const userData = await UserService.registration(
                name,
                email,
                password,
                confrimPassword
            );
        } catch (error) {
            return next(new HttpError("User registration filed.", 422));
        }
    }

    // post api/users/login - login user
    async loginUser(req, res, next) {
        res.json("login user!");
    }
    // post api/users/change-avatar - change avatar
    async changeAvatar(req, res, next) {
        res.json("change user avatar!");
    }

    // post api/users/logout - logout user
    async logoutUser(req, res, next) {
        res.json("logout user !");
    }
    // get api/users/:id - user profile
    async getUser(req, res, next) {
        res.json("User profile!");
    }

    // patch api/users/edit-user -  edit user profile
    async editUser(req, res, next) {
        res.json("Edit profile!");
    }

    // get api/users/authors -  get all users
    async getAuthors(req, res, next) {
        res.json("all authors!");
    }
    // get api/users/refresh -  get refresh token
    async refresh(req, res, next) {
        res.json("refresh token!");
    }
}

module.exports = new UsersControllers();
