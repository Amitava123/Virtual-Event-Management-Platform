const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");
const users = require("../models/userModel");
const { sendEmail } = require("../services/emailService");

exports.register = async (req, res) => {
    const { email, password, role } = req.body;
    if (users.find((user) => user.email === email)) {
        return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { email, password: hashedPassword, role };
    users.push(newUser);

    await sendEmail(
        email,
        "Welcome to the Event Platform",
        "You have successfully registered."
    );

    res.status(201).send("User registered successfully");
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = users.find((user) => user.email === email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).send("Invalid credentials");
    }

    const token = jwt.sign({ email: user.email, role: user.role }, JWT_SECRET, {
        expiresIn: "1h",
    });

    res.json({ token });
};
