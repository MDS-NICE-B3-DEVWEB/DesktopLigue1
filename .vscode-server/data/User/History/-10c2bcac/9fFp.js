import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../api/RegisterPageApi';

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
    <form onSubmit={handleSubmit}>
      {/* Form fields for name, email, and password */}
      {/* Display errorMessage if it exists */}
    </form>
  );
};

export default RegisterForm;
