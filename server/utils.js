const jwt = require('jsonwebtoken');

function generateToken(user){
    if(!user) return null;

    return jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24, 
    });
}

function getCleanUser(user){
    if(!user) return null;

    return {
       user
    };
}

module.exports = {
    generateToken,
    getCleanUser
}