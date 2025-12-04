import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authRegister } from '../api';
import AuthContext from '../auth/AuthProvider';

export default function Register(){
  const [form,setForm] = useState({ name:'', email:'', password:'' });
  const [loading,setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const nav = useNavigate();

  const handle = (e) => setForm({...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await authRegister(form);
      login(data.token, data.user);
      nav('/');
    } catch (err) {
      alert(err.message || 'Registration failed');
    } finally { setLoading(false); }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="brand">
          <div className="logo">TD</div>
          <div>
            <div className="title">MERN Todo</div>
            <div className="subtitle">Register a new account</div>
          </div>
        </div>
      </div>

      <div className="card">
        <form className="form" onSubmit={submit}>
          <input name="name" placeholder="Name" className="input" onChange={handle} value={form.name} />
          <input name="email" placeholder="Email" className="input" onChange={handle} value={form.email} />
          <input name="password" placeholder="Password" type="password" className="input" onChange={handle} value={form.password} />
          <div style={{display:'flex',gap:8}}>
            <button className="btn" type="submit" disabled={loading}>{loading? 'Creating...':'Create account'}</button>
            <Link to="/login" className="btn secondary" style={{textDecoration:'none', display:'inline-flex',alignItems:'center'}}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
