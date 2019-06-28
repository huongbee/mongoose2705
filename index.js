const mongoose = require('mongoose');
require('./dbconnect');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    // _id: {
    //     type: Schema.Types.ObjectId,
    //     unique: true,
    //     required: true
    // }, 
    email: {
        type: String, 
        unique: true,
        required: true
    },
    password: String,
    name: String,
    birthdate: {
        type: Date,
        default: new Date()
    }
})
const UserModel = mongoose.model('user', UserSchema); // user
