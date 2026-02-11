import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../features/auth/authThunk';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="containerLogin">
      <p style={{ fontSize: 'xx-large', fontWeight: 'bold' }}>LOGIN</p>
      <form onSubmit={handleSubmitLogin}>
        <div className="containerLogin2">
          <label>EMAIL</label>
          <input
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="containerLogin2">
          <label>KATA SANDI</label>
          <input
            type="password"
            placeholder="KATA SANDI"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          style={{
            padding: '7px',
            fontSize: 'larger',
            backgroundColor: 'black',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      </form>
      <p>
        Belum punya akun? <Link to={'/register'}>Daftar di sini.</Link>
      </p>
    </div>
  );
};

export default Login;
