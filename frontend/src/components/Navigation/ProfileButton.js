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

  console.log("user:", user)

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
      </button>
      {showMenu && (user ?
      (<ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>) :
        (<ul className="profile-drop">
          <li>
            <button onClick={() => {
              setLogin(false)
              setShowModal(true)
            }}>
              Sign up
            </button>
            <button onClick={() => {
              setLogin(true)
              setShowModal(true)
            }}>
              Log In
            </button>
          </li>
        </ul>)
      )}
    </>
  );
}

export default ProfileButton;
