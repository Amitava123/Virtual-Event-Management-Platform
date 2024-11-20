# Event Management Platform

This is a backend system for a virtual event management platform, focused on user registration, event scheduling, and participant management. The system features secure user authentication with JWT, event management, and attendee registration. The data is stored in-memory, and the platform supports the following functionalities:

-   User Registration and Login
-   Event Creation, Update, and Deletion
-   Event Registration for Participants
-   Role-based Access (Organizers vs Attendees)

## Project Structure

```plaintext
event-management-platform/
├── config/
│   └── config.js            # Configuration settings (e.g., JWT secret, email credentials)
├── controllers/
│   ├── authController.js    # Handlers for user registration and login
│   └── eventController.js   # Handlers for event CRUD operations and registration
├── middleware/
│   └── authMiddleware.js    # JWT authentication middleware
├── models/
│   ├── userModel.js         # In-memory user data
│   └── eventModel.js        # In-memory event data
├── routes/
│   ├── authRoutes.js        # Routes for user authentication (register/login)
│   └── eventRoutes.js       # Routes for event management and registration
├── services/
│   └── emailService.js      # Service for sending email notifications
├── utils/
│   └── jwtUtils.js         # JWT utility functions (token verification)
├── server.js                # Main server file to start the application
└── package.json             # Project metadata and dependencies
```

## Setup Instructions

### 0. Prerequisites

-   Node.js (v14 or above)
-   npm (v6 or above)

### 1. Clone the repository

```bash
git clone https://github.com/argha98codz/Virtual-Event-Management-Platform.git
cd event-management-platform
```

### 2. Install Dependencies

Install the required dependencies by running:

```bash
npm install
```

### 3. Configure Email Settings

Create .env
Update the EMAIL_USER and EMAIL_PASS fields with your email credentials (used for sending registration emails).

### 4. Run the Application

Start the server:

```bash
npm start
The server will run on http://localhost:5000.
```

## API Endpoints

-   POST /register: Register a new user (Requires email, password, role).
-   POST /login: Log in with email and password (Returns a JWT token).
-   GET /events: Get a list of all events (Requires authentication).
-   POST /events: Create a new event (Requires organizer role).
-   PUT /events/
    : Update an existing event (Requires organizer role).
-   DELETE /events/
    : Delete an event (Requires organizer role).
-   POST /events/
    /register: Register for an event as a participant (Requires authentication).

## Testing the API

You can test the API using tools like Postman. When calling protected endpoints, pass the JWT token in the Authorization header as Bearer <token>.
