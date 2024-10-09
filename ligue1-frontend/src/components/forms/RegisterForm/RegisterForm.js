import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../api/RegisterPageApi';
import { Link } from 'react-router-dom';
import './RegisterForm.css'; // Importer le fichier CSS

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function validatePassword(password) {
    // Check if the password length is at least 8 characters
    if (password.length < 8) {
      return "Le mot de passe doit contenir au moins 8 caractères.";
    }
  
    // Check if the password includes at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
      return "Le mot de passe doit inclure une majuscule.";
    }
  
    // Check if the password includes at least one lowercase letter
    if (!/[a-z]/.test(password)) {
      return "Le mot de passe doit inclure une minuscule.";
    }
  
    // Check if the password includes at least one number
    if (!/[0-9]/.test(password)) {
      return "Le mot de passe doit inclure un nombre.";
    }
  
    // Check if the password includes at least one special character
    if (!/[^A-Za-z0-9]/.test(password)) {
      return "Le mot de passe doit inclure un caractère spécial.";
    }
  
    // If all checks pass, return an empty string indicating no error
    return "";
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validate email
    if (!email.includes('@')) {
      setErrorMessage('Veuillez entrer une adresse email valide.');
      return;
    }
  
    // Validate password
    const passwordError = validatePassword(password);
    if (passwordError) {
      setErrorMessage(passwordError);
      return;
    }
  
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
      console.error("Échec de l'inscription :", error);
      setErrorMessage("L'inscription a échoué. Veuillez réessayer.");
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
        <p className="login-link"><Link to="/login">Connexion</Link></p>
      </form>
    </div>
  );
};

export default RegisterForm;
