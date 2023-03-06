import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginForm from '../LoginFormModal/LoginForm';
import { Modal } from '../../context/Modal'
import SignupFormPage from '../SignupFormPage'
import github from '../../assets/github-mark.png'
import linkedin from '../../assets/linkin.png'
import './Navigation.css';
import logo from '../../logo/Screenshot_56.png'

function Navigation({ isLoaded }){
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user);
  const [showModal, setShowModal] = useState(false)
  const [login, setLogin] = useState(true)

  const redirect = async () => {
    await history.push('/')
  }

  return (
    <ul className='nav'>
      <img className='logo' src={logo} onClick={redirect}>
      </img>
      <div className='socials'>
            <a href="https://github.com/cchaseT42" target="_blank">
            <div className="github">
            <img id="socialimg" src={github}></img>
            </div>
            </a>
            <a href='https://www.linkedin.com/in/chase-towe-89673523a/' target="_blank">
            <div className='linkedin'>
            <img id="socialimg2" src={linkedin}></img>
            </div>
            </a>
      </div>
      <li className='navLinks'>
        {sessionUser ? <NavLink exact to="/create" className="becomeHost"> Become a Host </NavLink>:<></>}

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
