const nodemailer = require("nodemailer");
const { EMAIL_USER, EMAIL_PASS } = require("../config/config");

const sendEmail = async (email, subject, text) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
        },
    });

    let mailOptions = {
        from: EMAIL_USER,
        to: email,
        subject: subject,
        text: text,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
