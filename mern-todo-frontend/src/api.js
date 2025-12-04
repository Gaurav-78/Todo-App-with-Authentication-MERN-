const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000';

async function request(path, { method='GET', body, token } = {}) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(API_BASE + path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data.message || 'Request failed';
    const err = new Error(message);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

export const authRegister = (payload) => request('/auth/register', { method: 'POST', body: payload });
export const authLogin = (payload) => request('/auth/login', { method: 'POST', body: payload });

export const getTasks = (token) => request('/tasks', { method: 'GET', token });
export const createTask = (token, payload) => request('/tasks', { method: 'POST', token, body: payload });
export const updateTask = (token, id, payload) => request(`/tasks/${id}`, { method: 'PUT', token, body: payload });
export const deleteTask = (token, id) => request(`/tasks/${id}`, { method: 'DELETE', token });
