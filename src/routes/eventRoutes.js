const express = require("express");
const router = express.Router();
const {
    createEvent,
    updateEvent,
    deleteEvent,
    registerForEvent,
    getAllEvents,
} = require("../controllers/eventController");
const authenticateToken = require("../middleware/authMiddleware");

router.post("/events", authenticateToken, createEvent);
router.put("/events/:id", authenticateToken, updateEvent);
router.delete("/events/:id", authenticateToken, deleteEvent);
router.post("/events/:id/register", authenticateToken, registerForEvent);
router.get("/events", authenticateToken, getAllEvents);

module.exports = router;
