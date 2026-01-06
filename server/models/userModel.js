const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    // basic
    name: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: { type: String, required: true },
    avatar: { type: String },
    posts: { type: Number, default: 0 },

    // account protection
    isEmailVerified: { type: Boolean, default: false },
    activationLink: { type: String },

    // role
    role: {
        type: String,
        enum: ["user", "moderator", "admin"],
        default: "user",
    },
});

module.exports = model("User", userSchema);
