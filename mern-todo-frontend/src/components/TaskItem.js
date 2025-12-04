import React from 'react';

export default function TaskItem({ task, onEdit, onDelete }) {
  return (
    <div className="task card">
      <div className="left">
        <div style={{minWidth:8}} />
        <div>
          <div style={{display:'flex',gap:10,alignItems:'baseline'}}>
                        <div style={{fontWeight:700}}>{task.title}</div>
            <div className="badge muted">{new Date(task.createdAt).toLocaleString()}</div>
          </div>
          <div className="muted">{task.description || 'No description'}</div>
        </div>
      </div>
      <div style={{display:'flex',gap:8,alignItems:'center'}}>
        <div className={`badge ${task.status}`} style={{textTransform:'capitalize'}}>{task.status}</div>
        <button className="btn secondary" onClick={() => onEdit(task)}>Edit</button>
<button className="btn secondary" onClick={() => onDelete(task)} style={{borderColor: '#ff6b6b', color: '#ff6b6b'}}>Delete</button>      </div>
    </div>
  );
}
