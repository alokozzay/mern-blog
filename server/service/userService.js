const HttpError = require("../models/errorModule");
const EmailService = require("../service/emailService");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

class UserService {
    async registration(name, email, password, confrimPassword) {
        if (!name || !email || !password) {
            return next(new HttpError("Fill all fields.", 400));
        }

        const existingEmail = await UserModel.findOne({ email });
        if (existingEmail) {
            return next(new HttpError(`${email} already exists`, 400));
        }

        if (password !== confrimPassword) {
            return next(new HttpError("the passwords dont match", 400));
        }

        // create Link
        const activationLink = uuid.v4();

        // Hash password
        const PasswordHash = await bcrypt.hash(password, 3);

        // send activation email
        await EmailService.sendActivationLink(email, activationLink);
    }
}
module.exports = new UserService();
