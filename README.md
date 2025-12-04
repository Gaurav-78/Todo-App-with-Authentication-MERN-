# Todo-App-with-Authentication-MERN-
Full-stack Todo application built with MongoDB, Express, React, and Node (MERN stack).   Features JWT authentication, CRUD tasks, and a modern responsive UI.

📌 MERN Todo App with Authentication

A full-stack Todo application built using MongoDB, Express, React, Node.js, with complete user authentication, protected routes, and CRUD operations for tasks.

🚀 Features
🔐 Authentication

Register

Login

JWT-based authentication

Protected task routes

📝 Task Management

Create task

Edit task

Delete task

View tasks of logged-in user

🎨 Frontend

React (functional components)

Modern UI

State management

Secure token storage (localStorage)

🛠 Backend

Express.js

MongoDB + Mongoose

JWT Authentication

Clean folder structure

📂 Folder Structure
root/
│── mern-todo-backend/
│── mern-todo-frontend/
│── README.md

🛠 Requirements

Make sure you have installed:

Node.js (v16+ recommended)

MongoDB (local or cloud Atlas)

Git

⚙ Backend Setup (mern-todo-backend)
1️⃣ Navigate to backend folder
cd mern-todo-backend

2️⃣ Install dependencies
npm install

3️⃣ Create .env file

Create a .env file inside mern-todo-backend/ with:

PORT=5000
MONGO_URI=mongodb://localhost:27017/mern_todo
JWT_SECRET=yourSecretKeyHere
JWT_EXPIRES_IN=7d

4️⃣ Start backend server
npm start


Backend will run on:
👉 http://localhost:5000

💻 Frontend Setup (mern-todo-frontend)
1️⃣ Navigate to frontend folder
cd mern-todo-frontend

2️⃣ Install dependencies
npm install

3️⃣ Start frontend
npm start


Frontend runs on:
👉 http://localhost:3000

🔗 API Endpoints Summary
Auth
Method	Endpoint	Description
POST	/auth/register	Create user
POST	/auth/login	Login user & get JWT
Tasks
Method	Endpoint	Description
POST	/tasks	Create new task
GET	/tasks	Get tasks for logged-in user
PUT	/tasks/:id	Update task
DELETE	/tasks/:id	Delete task
