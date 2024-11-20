require("dotenv").config();

module.exports = {
    JWT_SECRET: "very-secured-secret-key",
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
};
