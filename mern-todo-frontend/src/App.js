import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/AuthProvider';
import PrivateRoute from './auth/PrivateRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import TasksPage from './pages/TasksPage';

function App(){
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={
          <PrivateRoute>
            <TasksPage />
          </PrivateRoute>
        } />
        <Route path="*" element={<div style={{padding:20}}>Not found</div>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
