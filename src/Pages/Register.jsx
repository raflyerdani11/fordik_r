import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../features/auth/authThunk';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <div className="containerRegister">
      <p style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>REGISTER</p>
      <form onSubmit={handleSubmitRegister}>
        <div className="containerRegister2">
          <label>NAMA</label>
          <input
            type="text"
            placeholder="NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="containerRegister2">
          <label>EMAIL</label>
          <input
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="containerRegister2">
          <label>PASSWORD</label>
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button
          style={{
            padding: '7px',
            fontSize: 'larger',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          Register
        </button>
      </form>
      <p>
        Udah punya akun? <Link to={'/login'}>Login di sini.</Link>
      </p>
    </div>
  );
};

export default Register;
