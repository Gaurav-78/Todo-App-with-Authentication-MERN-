const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const tasksRoutes = require('./routes/tasks');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/tasks', tasksRoutes);

// Health
app.get('/', (req, res) => res.json({ message: 'MERN Todo API is running' }));

// Error handler (simple)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong' });
});

module.exports = app;
