import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../api/LoginPageApi';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = { email, password };
      const response = await login(user);
      console.log(response);
      if (response.status_code === 200) {
        navigate('/');
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Login failed. Please try again.');
    }
  };

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)'}}>
        <label>
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{borderRadius: '5px', padding: '5px', border: '1px solid #ccc'}} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={{borderRadius: '5px', padding: '5px', border: '1px solid #ccc'}} />
        </label>
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit" style={{borderRadius: '5px', padding: '5px 10px'}}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;