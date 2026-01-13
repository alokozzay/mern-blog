const HttpError = require("../models/errorModule");
const UserModel = require("../models/userModel.js");
const userService = require("../service/userService.js");
const UserService = require("../service/userService.js");
const { validationResult } = require("express-validator");
const { handleHttpError } = require("../utils/errorHelper.js");

class UsersControllers {
    // POST api/users/register - registration
    async registerUser(req, res, next) {
        try {
            const { name, email, password, confirmPassword } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(
                    new HttpError("validation error", 400, errors.array())
                );
            }
            const userData = await UserService.registration(
                name,
                email,
                password,
                confirmPassword
            );
            res.cookie("refreshToken", userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });
            return res.json(userData);
        } catch (error) {
            handleHttpError(error, next, "User registration failed.", 422);
        }
    }

    // post api/users/login - login user
    async loginUser(req, res, next) {
        try {
            const { email, password } = req.body;
            const userData = await UserService.login(email, password);
            res.cookie("refreshToken", userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });
            return res.json(userData);
        } catch (error) {
            handleHttpError(
                error,
                next,
                "An error occurred while trying to log in.",
                422
            );
        }
    }

    // post api/users/logout - logout user
    async logoutUser(req, res, next) {
        try {
            const { refreshToken } = req.cookies;
            if (refreshToken) {
                await UserService.logout(refreshToken);
            }
            res.clearCookie("refreshToken");
            return res.sendStatus(200);
        } catch (error) {
            res.clearCookie("refreshToken");
            handleHttpError(
                error,
                next,
                "An error occurred while logging out.",
                422
            );
        }
    }

    // post api/users/change-avatar - change avatar
    async changeAvatar(req, res, next) {
        res.json("change user avatar!");
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

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await userService.activate(activationLink);
            return res.redirect(process.env.CLIENT_URL);
        } catch (error) {
            console.log(error);
            if (error instanceof HttpError) {
                return next(error);
            }
            return next(new HttpError("User registration failed.", 422));
        }
    }
}

module.exports = new UsersControllers();
