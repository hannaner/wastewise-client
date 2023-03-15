import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
// import '../../pages/AuthPage/AuthPage.css'
 
export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    setError('');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Oops! Failed to login, try again');
    }
  }

  return (
    <>
      <div className="form-container">
      <h2>login</h2>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Email</label>
          <input 
            type="text" 
            name="email" 
            value={credentials.email} 
            onChange={handleChange} 
            required />
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            value={credentials.password} 
            onChange={handleChange} 
            required />
          <button className="auth-button" type="submit">Login</button>
        </form>
      </div>
      <p className="error-message">{error}</p>
    </>
  );
}