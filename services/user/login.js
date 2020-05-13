const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = login = async ({ email, password }) => {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error("User does not exist");
        }

        const isEqual = await bcrypt.compare(password, user.password);

        if (!isEqual) {
            throw new Error("Password is incorrect");
        }

        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return {
            userId: user.id,
            token: token,
            tokenExpiration: 1,
            firstName: user.firstName, 
            lastName: user.lastName
        }
    } catch (error) {
        throw error;
    }
}