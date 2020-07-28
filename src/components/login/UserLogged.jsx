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
      <button
        className="nav-item nav-link btn btn-link logout"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default UserLogged;
