const app = require('./app');
const chalk = require('chalk')
if(process.env.NODE_ENV !== 'production'){
    const ENV = require('dotenv');
    ENV.config();
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(chalk.greenBright(`Server started on port ${PORT}`));
})