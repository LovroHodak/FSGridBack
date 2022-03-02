const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
    }
})

const User = mongoose.model("user", userSchema)

module.exports = User;