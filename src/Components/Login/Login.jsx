import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className='Login-component'>
        <div className="login-card">
            <div className="login-card-header">Giriş Yapınız</div>
            <div className="login-card-username">Username: <input type="text" placeholder='Username'/></div>
            <div className="login-card-passaword">Passaword: <input type="text" placeholder='Passaword'/></div>
            <Link to="/">   <div className="login-card-button"><button>Giriş Yap</button> </div></Link>
        </div>
        
    </div>
  )
}

export default Login