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
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          </label>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password:
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
          </label>
        </div>
        {errorMessage && <p className="text-red-500 text-xs italic">{errorMessage}</p>}
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;