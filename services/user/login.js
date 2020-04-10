const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = login = async ({email, password}) => {
    try{
        const user = await User.findOne({email});

        if(!user){
            throw new Error("User does not exist");
        }

        const isEqual = bcrypt.compare(password, user.password);

        if(!isEqual){
            throw new Error("Password is incorrect");
        }

        const token = jwt.sign({userId: user.id, email : user.email}, 'myownsecrettoken', {expiresIn: '1h'});
        return {
            userId : user.id,
            token: token,
            tokenExpiration: 1
        }
    }catch(error){
        throw error;
    }
}