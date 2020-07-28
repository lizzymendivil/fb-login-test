import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="sticky-footer bg-white">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Footer</span>
          <Link className="nav-link" to="/privacy-policy">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
