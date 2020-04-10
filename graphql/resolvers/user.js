const addUser = require('../../services/user/addUser');
const loginUser = require('../../services/user/login')

module.exports = {
    addUser: async args => {
        try {
            const user = await addUser({
                email: args.userInput.email,
                password: args.userInput.password
            });
            return { ...user._doc, password: null }
        } catch (error) {
            throw error;
        }
    },
    login: async args => {
        try{
            const login = await loginUser(args);
            return login;
        }catch(error){
            throw error
        }
    }
}