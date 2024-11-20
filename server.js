const express = require("express");
const app = express();
const authRoutes = require("./src/routes/authRoutes");
const eventRoutes = require("./src/routes/eventRoutes");
const logger = require("./src/middleware/logger");

app.use(express.json());
app.use(logger);

app.use(authRoutes);
app.use(eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
