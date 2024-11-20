module.exports = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${req.method} ${req.originalUrl} - IP: ${req.ip}`;
    console.log(logMessage);
    next();
};
