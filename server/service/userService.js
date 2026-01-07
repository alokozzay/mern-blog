const HttpError = require("../models/errorModule");
const EmailService = require("../service/emailService");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const UserModel = require("../models/userModel.js");
const TokenService = require("../service/tokenService.js");
const UserDto = require("..//dtos/userDto.js");

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
        await EmailService.sendActivationLink(email, activationLink);

        const userDto = new UserDto(newUser);

        // create token jwt
        const tokens = TokenService.generationTokens({ ...userDto });
        await TokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto };
    }
}
module.exports = new UserService();
