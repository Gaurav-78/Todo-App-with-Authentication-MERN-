import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../auth/AuthProvider';
import { getTasks, createTask, updateTask, deleteTask } from '../api';
import TaskItem from '../components/TaskItem';
import TaskForm from '../components/TaskForm';
import { useNavigate } from 'react-router-dom';

export default function TasksPage(){
  const { token, user, logout } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    if (!token) return;
    fetchTasks();
    // eslint-disable-next-line
  }, [token]);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const data = await getTasks(token);
      setTasks(data);
    } catch (err) {
      if (err.status === 401) {
        logout();
        nav('/login');
      } else {
        alert(err.message || 'Failed to fetch tasks');
      }
    } finally { setLoading(false); }
  };

  const handleCreate = async (payload) => {
    try {
      const newTask = await createTask(token, payload);
      setTasks(prev => [newTask, ...prev]);
    } catch (err) {
      alert(err.message || 'Create failed');
    }
  };

  const handleUpdate = async (payload) => {
    try {
      const updated = await updateTask(token, editTask._id, payload);
      setTasks(prev => prev.map(t => t._id === updated._id ? updated : t));
      setEditTask(null);
    } catch (err) {
      alert(err.message || 'Update failed');
    }
  };

  const handleDelete = async (task) => {
    if (!window.confirm('Delete this task?')) return;
    try {
      await deleteTask(token, task._id);
      setTasks(prev => prev.filter(t => t._id !== task._id));
    } catch (err) {
      alert(err.message || 'Delete failed');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="brand">
          <div className="logo">TD</div>
          <div>
            <div className="title">Your Tasks</div>
            <div className="subtitle">Welcome {user?.name || 'user'}</div>
          </div>
        </div>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <button className="btn secondary" onClick={() => { logout(); nav('/login'); }}>Logout</button>
        </div>
      </div>

      <div className="card">
        <h3>{editTask ? 'Edit Task' : 'Create New Task'}</h3>
        <TaskForm
          initial={editTask || undefined}
          onSubmit={editTask ? handleUpdate : handleCreate}
          submitLabel={editTask ? 'Update Task' : 'Create Task'}
        />
      </div>

      <div style={{height:16}} />

      <div className="card">
        <h3>Tasks {loading && '(loading...)'}</h3>
        <div className="tasks">
          {tasks.length === 0 && <div className="muted">No tasks yet. Create your first task!</div>}
          {tasks.map(task => (
            <TaskItem
              key={task._id}
              task={task}
              onEdit={(t)=>setEditTask(t)}
              onDelete={(t)=>handleDelete(t)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
