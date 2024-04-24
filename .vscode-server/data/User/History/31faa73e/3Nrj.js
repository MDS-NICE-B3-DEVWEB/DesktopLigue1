import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../api/LoginPageApi';
import { Link } from 'react-router-dom';
import './LoginScreen.css'; // Importez votre fichier CSS

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
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Login</button>
        <p className="register-link">Pas de compte ? <Link to="/register">Inscrivez-vous</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;
