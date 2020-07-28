import React from "react";

import "./FacebookButton.Styles.css";

const FacebookButton = ({ onLogin }) => {
  const facebookLogin = () => {
    if (!window.FB) return;
    window.FB.getLoginStatus((response) => {
      console.log("response", window.FB);
      if (response.status === "connected") {
        facebookLoginHandler(response);
      } else {
        window.FB.login(facebookLoginHandler, {
          scope: "public_profile,email",
        });
      }
    });
  };

  const facebookLoginHandler = (response) => {
    if (response.status === "connected") {
      window.FB.api("/me?fields=id,name,email,picture", (userData) => {
        console.log(userData);
        const user = {
          ...userData,
          accessToken: response.authResponse.accessToken
        };
        onLogin(user);
      });
    }
  };

  return (
    <div>
      <a onClick={facebookLogin} className="login">
        <span>Login</span>
      </a>
    </div>
  );
};

export default FacebookButton;
