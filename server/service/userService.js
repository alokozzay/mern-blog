const HttpError = require("../models/errorModule");
const EmailService = require("../service/emailService");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const UserModel = require("../models/userModel.js");
const TokenService = require("../service/tokenService.js");
const UserDto = require("..//dtos/userDto.js");
const userModel = require("../models/userModel.js");

class UserService {
    async registration(name, email, password, confirmPassword) {
        if (!name || !email || !password || !confirmPassword) {
            throw new HttpError("Fill all fields.", 400);
        }

        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail) {
            throw new HttpError(`${email} already exists`, 400);
        }

        if (password !== confirmPassword) {
            throw new HttpError("the passwords dont match", 400);
        }

        // create Link
        const activationLink = uuid.v4();

        // Hash password
        const passwordHash = await bcrypt.hash(password, 3);
        // create user in db
        const newUser = await UserModel.create({
            name,
            email,
            password: passwordHash,
            activationLink,
        });

        // send activation email
        await EmailService.sendActivationLink(
            email,
            `${process.env.API_URL}/api/users/activate/${activationLink}`
        );

        const userDto = new UserDto(newUser);

        // create token jwt
        const tokens = TokenService.generationTokens({ ...userDto });
        await TokenService.saveTokenInDb(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto };
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({ activationLink });
        if (!user) {
            throw new HttpError("The activation link is invalid.", 400);
        }
        user.isEmailVerified = true;
        await user.save();
    }

    async login(email, password) {
        const user = await UserModel.findOne({ email });

        if (!user) {
            throw new HttpError("a user with such an email will not find", 400);
        }

        const isPassEquals = await bcrypt.compare(password, user.password);
        if (!isPassEquals) {
            throw new HttpError("incorrect password", 400);
        }

        const userDto = new UserDto(user);
        const tokens = TokenService.generationTokens({ userDto });
        TokenService.saveTokenInDb(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto };
    }

    async logout(refreshToken) {
        await TokenService.removeToken(refreshToken);
    }
}
module.exports = new UserService();
