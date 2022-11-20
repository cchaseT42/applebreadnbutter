// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';

function ProfileButton({ user, setLogin, setShowModal }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button id = "button" onClick={openMenu}>
        <i className="fas fa-user-circle" />
        <i className="fa-solid fa-bars" />
      </button>
      {showMenu && (user ?
      (<ul className="profile-dropdown">
        <div id="loggedInInfo">
          <li className="credentials">{user.username}</li>
          <li className="credentials">{user.email}</li>
          <li id="logout" onClick={logout}>
          <span id="logoutText">Log out</span>
          </li>
        </div>
        </ul>) :
        (<ul className="profile-drop">
          <div id="LoginSignup">
          <li id="signup_button" onClick={() => {
              setLogin(false)
              setShowModal(true)
            }}>
              Sign up
            </li>
            <li id="login_button" onClick={() => {
              setLogin(true)
              setShowModal(true)
            }}>
              Log In
          </li>
          </div>
        </ul>)
      )}
    </>
  );
}

export default ProfileButton;
