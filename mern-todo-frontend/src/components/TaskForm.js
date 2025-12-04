import React, { useState } from 'react';

export default function TaskForm({ initial = { title:'', description:'', status: 'pending' }, onSubmit, submitLabel = 'Save' }) {
  const [form, setForm] = useState(initial);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return alert('Title required');
    onSubmit(form);
  };

  return (
    <form className="form" onSubmit={submit}>
      <input name="title" placeholder="Title" className="input" value={form.title} onChange={handleChange} />
      <textarea name="description" placeholder="Description" className="textarea" value={form.description} onChange={handleChange} />
      <select name="status" value={form.status} onChange={handleChange} className="select">
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done</option>
      </select>
      <div style={{display:'flex', gap:10}}>
        <button className="btn" type="submit">{submitLabel}</button>
      </div>
    </form>
  );
}
