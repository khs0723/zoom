const {model, Schema} = require("mongoose")

const userSchema = new Schema({
    name: String,
    password: String,
    email: String,
    createdAt: String,
    friends: [{
        type: Schema.Types.ObjectId, ref:"Friends"
    }, {timestamps: true}]
})

module.exports = model("User", userSchema)