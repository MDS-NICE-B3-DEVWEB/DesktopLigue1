import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../api/LoginPageApi';
import { Link, useNavigate } from 'react-router-dom';

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
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: '16px', backgroundColor: '#02153C'}}>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)'}}>
      <label style={{color: '#CEFB03'}}>
  Email:
  <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={{height: '40px', borderColor: 'white', borderWidth: '1px', borderRadius: '10px', marginBottom: '16px', paddingLeft: '8px', color: '#02153C'}} />
</label>
<label style={{color: '#CEFB03'}}>
  Password:
  <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={{height: '40px', borderColor: 'white', borderWidth: '1px', borderRadius: '10px', marginBottom: '16px', paddingLeft: '8px', color: '#02153C'}} />
</label>
        {errorMessage && <p style={{color: 'white'}}>{errorMessage}</p>}
        <button type="submit" style={{backgroundColor: '#CEFB03', padding: '10px', alignItems: 'center', borderRadius: '10px', color: 'black', fontSize: '18px'}}>Login</button>
      </form>
      <p style={{color: 'white'}}>Pas de compte ? <Link to="/register" style={{color: '#CEFB03'}}>Inscrivez-vous</Link></p>
    </div>
  );
};

export default LoginForm;