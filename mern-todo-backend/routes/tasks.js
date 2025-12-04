const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/tasksController');

router.use(auth); // All routes below require auth

router.post('/', createTask);       // POST /tasks
router.get('/', getTasks);         // GET /tasks
router.put('/:id', updateTask);    // PUT /tasks/:id
router.delete('/:id', deleteTask); // DELETE /tasks/:id

module.exports = router;
