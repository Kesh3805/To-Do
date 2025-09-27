import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const AuthPage = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-brand">
          <h1>📝 Todo App</h1>
          <p>Organize your life, one task at a time</p>
        </div>
        
        <div className="auth-content">
          {isLoginMode ? (
            <Login onToggleMode={toggleMode} />
          ) : (
            <Register onToggleMode={toggleMode} />
          )}
        </div>

        <div className="auth-features">
          <div className="feature">
            <span className="feature-icon">✅</span>
            <span>Organize your tasks</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🎯</span>
            <span>Set priorities</span>
          </div>
          <div className="feature">
            <span className="feature-icon">📅</span>
            <span>Track due dates</span>
          </div>
          <div className="feature">
            <span className="feature-icon">📊</span>
            <span>View statistics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;