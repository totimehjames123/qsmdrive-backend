const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    profilePicture: {
        type: String,
        default: "user.png",
    },
    dateOfRegistration: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("users", userSchema)