const jwt = require('jsonwebtoken');
module.exports = (request, response, next) => {
    const authHeader = request.get('Authorization');

    if(!authHeader){
        request.isAuthenticated = false;
        return next();
    }

    const token = authHeader.split(' ')[1];


    if(!token || token == ''){
        request.isAuthenticated = false;
        return next();
    }

    let decodedToken;

    try{
        decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    }catch(error){
        request.isAuthenticated = false;
        return next();
    }

    if(!decodedToken){
        request.isAuthenticated = false;
        return next();
    }

    request.isAuthenticated = true;
    request.userId = decodedToken.userId;
    return next();
}