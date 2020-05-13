const User = require('../../models/user');
const bcrypt = require('bcryptjs');

const SALT_ROUNDS = 12;

module.exports = addUser = async ({ firstName, lastName, email, password }) => {
    try {
        const user = await User.findOne({ email });

        if (user) {
            throw new Error("User already exists")
        }

        const salt = await bcrypt.genSalt(SALT_ROUNDS);

        const hash = await bcrypt.hash(password, salt);

        password = hash;

        const newUser = new User({
            firstName,
            lastName,
            email,
            password
        })

        await newUser.save();
        return newUser;
    } catch (error) {
        throw error;
    }
}