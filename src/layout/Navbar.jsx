import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import FacebookButton from "../components/login/FacebookButton";
import * as storage from '../utils/storage'
import UserLogged from "../components/login/UserLogged";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const onLogin = (user) => {
    storage.setUser(user);
    setUser(user);
  }

  const onLogout = () => {
    storage.clear();
    setUser(null);
  }

  useEffect(() => {
    const checkSession = () => {
      const user = storage.getUser();
      if (user) {
        setUser(user);
      }
    };
    checkSession();
  }, []);

  return (
    <Fragment>
      <div className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">
          <Link className="nav-link" to="/">
            Facebook Login Test
          </Link>
        </h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {user && <UserLogged user={user} onLogout={onLogout} />}
        {!user && <FacebookButton onLogin={onLogin} />}
      </div>
    </Fragment>
  );
};

export default Navbar;
