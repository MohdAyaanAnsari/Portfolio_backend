# 🚀 Portfolio Backend

This is the backend service for my personal portfolio, built with **Node.js**, **Express.js**, and **MongoDB**.  
It provides API endpoints to manage project listings and handle contact form messages.

---

## 🛠 Tech Stack

- **Runtime:** Node.js  
- **Framework:** Express.js (v5.x)  
- **Database:** MongoDB (Mongoose v9.x)  
- **CORS:** Enabled for frontend integration  
- **Environment Variables:** Dotenv  

---

## ✨ Key Features

- 📌 **Project Fetching**  
  Optimized retrieval of projects sorted by most recent first.

- 📩 **Message Management**  
  Securely receive and store contact form submissions.

- 🔗 **Database Connection**  
  Robust MongoDB connection with proper error handling.

- 🔄 **Live Reloading**  
  Development environment powered by Nodemon.

---

## 📂 Project Structure

```plaintext
Portfolio_backend/
├── config/
│   └── db.js              # MongoDB connection setup
├── models/
│   ├── Message.js         # Schema for contact messages
│   └── Project.js         # Schema for portfolio projects
├── routes/
│   ├── messageRoutes.js   # POST/GET endpoints for messages
│   └── projectRoutes.js   # GET endpoint for projects
├── server.js              # Entry point and Express app configuration
└── package.json           # Dependencies and scripts
```

