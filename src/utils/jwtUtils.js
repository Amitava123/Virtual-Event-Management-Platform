const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

const verifyToken = (token) => {
    return jwt.verify(token, JWT_SECRET);
};

module.exports = { verifyToken };
