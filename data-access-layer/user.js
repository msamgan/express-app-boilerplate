const {
    User
} = require('../models');

const {
    Op
} = require('sequelize');
const bcrypt = require('bcrypt');

const hashSalt = parseInt(process.env.HASH_SALT) || 10;

const validateUser = async (data) => {
    let user = await User.findAll({
        where: {
            email: data.email
        }
    });
    if(user.length) {
        user = user[0];
        let isUserValid = await bcrypt.compareSync(data.password, user.password);
        if(isUserValid) {
            delete user.password;
            return user;
        } else {
            throw Error("Invalid password");
        }
    } else {
        throw Error("Invalid user");
    }
};

module.exports = {
    validateUser 
}