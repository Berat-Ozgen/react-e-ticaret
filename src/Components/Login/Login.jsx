import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import {register} from '../../firebase';
import './Login.css';


const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await register(email,password)
    console.log(user)
  
  }


  return (
    <div className='Login-component' onSubmit={handleSubmit}>
      <Toaster/>
      <form>
      <div className="login-card">
            <div className="login-card-header">Giriş Yapınız</div>
            <div className="login-card-username">Username: <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='ornek01@gmail.com'/></div>
            <div className="login-card-passaword">Passaword: <input type="password" value={password}  onChange={(e) => setPassword(e.target.value)} placeholder='******'/></div>
            <div className="login-card-button"><button>Giriş Yap</button> </div>
        </div>
        
      </form>
        
    </div>
  )
}

export default Login