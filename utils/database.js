const mongoose = require('mongoose');
const chalk = require('chalk');


module.exports = connectToDatabase = async () => {
    try{
        const connection = await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        if(!connection){
            throw error;
        }

        console.log(chalk.greenBright("Connected to database"))
    }catch(error){
        throw error;
    }
}