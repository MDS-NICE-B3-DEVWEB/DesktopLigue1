import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../api/RegisterPageApi';
import './RegisterForm.css'; // Importer le fichier CSS

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = { name, email, password };
      const response = await register(user);
      console.log(response);
      if (response.status_code === 200) {
        navigate('/');
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
