import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState({
    login: false,
    signup2: false
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Logging in with:', formData.email, formData.password);
      // Handle login here
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      console.log('Signing up with:', formData);
      // Handle signup here
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-overlay">
        <div className="auth-container">
          <form className="auth-form" onSubmit={handleSubmit}>
            <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

            {!isLogin && (
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group" style={{ position: 'relative' }}>
              <label>Password</label>
              <input
                type={showPassword.login ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="6"
                style={{ paddingRight: '40px' }}
              />
              <i
                className={`bx ${showPassword.login ? "bx-show" : "bx-hide"} eye-icon`}
                onClick={() => togglePasswordVisibility("login")}
              ></i>
            </div>

            {!isLogin && (
              <div className="form-group" style={{ position: 'relative' }}>
                <label>Confirm Password</label>
                <input
                  type={showPassword.signup2 ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  minLength="6"
                  style={{ paddingRight: '40px' }}
                />
                <i
                  className={`bx ${showPassword.signup2 ? "bx-show" : "bx-hide"} eye-icon`}
                  onClick={() => togglePasswordVisibility("signup2")}
                ></i>
              </div>
            )}

            <button type="submit" className="submit-btn">
              {isLogin ? 'Login' : 'Sign Up'}
            </button>

            <p className="toggle-form">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <span onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? 'Sign up now' : 'Login now'}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
