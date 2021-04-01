const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    // TODO: Decide between header or cookie
    let accessToken = req.cookies.accessToken;
    if(!accessToken) {
        throw new Error("Invalid Token");
    }
    let user = jwt.verify(accessToken, process.env.JWT_SECRET);

    req.user = user;
    
    next();
};