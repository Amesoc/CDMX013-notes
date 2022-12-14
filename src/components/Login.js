import React from 'react';
import signGoogle from '../config/AuthGoogle'
import { useNavigate } from 'react-router-dom';
import { Home } from './Home'
import '../styles/Login.css';


function Login(props) {
  const navigate = useNavigate();
  const { setUser } = props;
  console.log(props);

  const handleclick = () => {
    const promiseUser = signGoogle();
    promiseUser.then((user) => {
      setUser(user);
      navigate("/home");
    })
  }

  return (
    <div className='content-start'>
      <h1>My notes</h1>
      <img
        className='logo'
        src={require('../img/logoNote2.png')}
        alt='Imagen logo' />
      <button className='registerGoogle' onClick={handleclick}></button>
    </div>

  )
}
export default Login;