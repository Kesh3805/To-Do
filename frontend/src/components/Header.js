import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    logout();
    setShowProfileMenu(false);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="header">
      <div className="header-content">
        <div className="header-left">
          <h1>📝 MERN Todo App</h1>
          <p>Organize your tasks efficiently</p>
        </div>
        
        <div className="header-right">
          <div className="user-profile">
            <div className="user-info">
              <span className="user-name">Welcome, {user?.name}</span>
              <span className="user-email">{user?.email}</span>
            </div>
            
            <div className="profile-menu">
              <button
                className="profile-avatar"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                title={user?.name}
              >
                {user?.avatar ? (
                  <img src={user.avatar} alt="Profile" />
                ) : (
                  <span className="avatar-initials">
                    {getInitials(user?.name || 'User')}
                  </span>
                )}
              </button>
              
              {showProfileMenu && (
                <div className="profile-dropdown">
                  <div className="dropdown-header">
                    <div className="dropdown-avatar">
                      {user?.avatar ? (
                        <img src={user.avatar} alt="Profile" />
                      ) : (
                        <span className="avatar-initials">
                          {getInitials(user?.name || 'User')}
                        </span>
                      )}
                    </div>
                    <div className="dropdown-info">
                      <div className="dropdown-name">{user?.name}</div>
                      <div className="dropdown-email">{user?.email}</div>
                    </div>
                  </div>
                  
                  <div className="dropdown-divider"></div>
                  
                  <button
                    className="dropdown-item"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <span className="dropdown-icon">👤</span>
                    Profile Settings
                  </button>
                  
                  <button
                    className="dropdown-item"
                    onClick={() => setShowProfileMenu(false)}
                  >
                    <span className="dropdown-icon">⚙️</span>
                    Preferences
                  </button>
                  
                  <div className="dropdown-divider"></div>
                  
                  <button
                    className="dropdown-item logout-item"
                    onClick={handleLogout}
                  >
                    <span className="dropdown-icon">🚪</span>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;