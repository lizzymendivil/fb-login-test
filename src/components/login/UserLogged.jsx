import React from "react";

import "./UserLogged.Styles.css";

const UserLogged = ({ user, onLogout }) => {
  const logout = () => {
    onLogout();
    window.FB.logout();
  };

  return (
    <div className="navbar navbar-light">
      {user.picture && (
        <img
          src={user.picture.data.url}
          className="user-image"
          alt={user.name}
        />
      )}
      <span>{user.name}</span>
      <a className="nav-item nav-link logout" onClick={logout}>
        Logout
      </a>
    </div>
  );
};

export default UserLogged;
