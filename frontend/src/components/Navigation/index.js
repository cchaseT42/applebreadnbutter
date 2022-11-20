import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginForm from '../LoginFormModal/LoginForm';
import { Modal } from '../../context/Modal'
import SignupFormPage from '../SignupFormPage'
import './Navigation.css';
import logo from '../../logo/output-onlinepngtools.png'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false)
  const [login, setLogin] = useState(true)

  return (
    <ul className='nav'>
      <img className='logo' src={logo}/>
      <li className='navLinks checkListings'>
        <NavLink exact to="/"> Check all listings </NavLink>
      </li>
      <li className='navLinks becomeHost'>
        <NavLink exact to="/create"> Become a Host </NavLink>
      </li>
      <li className='navLinks button'>
        {isLoaded && (<ProfileButton
        user ={sessionUser}
        setLogin={setLogin}
        setShowModal={setShowModal}
        />
      )}
        </li>
        {showModal && <Modal onClose={() => setShowModal(false)}>
          {login ? (<LoginForm setShowModal={setShowModal}/>
          ) : <SignupFormPage
          setShowModal={setShowModal}/>}
        </Modal>}
    </ul>
  );
}

export default Navigation;
