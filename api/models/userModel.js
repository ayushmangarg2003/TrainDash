// Imports
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// User Schema
const userSchema = new mongoose.Schema({
    uniqueID: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

// User Register Method
userSchema.statics.register = async function (uniqueID, password) {
    if (!uniqueID || !password) {
        throw Error('All fields must be filled')
    }

    const exists = await this.findOne({ uniqueID })
    if (exists) {
        throw Error('User already exists')
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    const user = await this.create({ uniqueID, password: hash })
    return user
}

// User Login Method
userSchema.statics.login = async function (uniqueID, password) {
    if (!uniqueID || !password) {
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({ uniqueID })
    if (!user) {
        throw Error('User does not exist')
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        throw Error('Incorrect Credentials')
    }

    return user
}

// Exporting User Model
module.exports = mongoose.model('User', userSchema);