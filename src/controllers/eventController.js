const events = require("../models/eventModel");

exports.createEvent = (req, res) => {
    if (req.user.role !== "organizer") {
        return res.status(403).send("Only organizers can create events");
    }

    const { date, time, description } = req.body;
    const newEvent = {
        id: events.length + 1,
        date,
        time,
        description,
        participants: [],
    };
    events.push(newEvent);

    res.status(201).json(newEvent);
};

exports.updateEvent = (req, res) => {
    if (req.user.role !== "organizer") {
        return res.status(403).send("Only organizers can update events");
    }

    const event = events.find((e) => e.id === parseInt(req.params.id));
    if (!event) return res.status(404).send("Event not found");

    const { date, time, description } = req.body;
    event.date = date || event.date;
    event.time = time || event.time;
    event.description = description || event.description;

    res.json(event);
};

exports.deleteEvent = (req, res) => {
    if (req.user.role !== "organizer") {
        return res.status(403).send("Only organizers can delete events");
    }

    const eventIndex = events.findIndex(
        (e) => e.id === parseInt(req.params.id)
    );
    if (eventIndex === -1) return res.status(404).send("Event not found");

    events.splice(eventIndex, 1);
    res.status(204).send();
};

exports.registerForEvent = (req, res) => {
    const event = events.find((e) => e.id === parseInt(req.params.id));
    if (!event) return res.status(404).send("Event not found");

    if (event.participants.includes(req.user.email)) {
        return res.status(400).send("Already registered for this event");
    }

    event.participants.push(req.user.email);

    res.status(201).send("Registered successfully");
};

exports.getAllEvents = (req, res) => {
    res.json(events);
};
