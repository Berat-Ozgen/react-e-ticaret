import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import {register} from '../../firebase';
import './register.css';
import { useDispatch } from 'react-redux';
import {register as registerHandle} from '../../store/auth';



const Register = () => {



  const [Remail,setREmail] = useState("")
  const [Rpassword,setRPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()




  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = await register(Remail,Rpassword)

      if (user) {
          dispatch(registerHandle(user))
          navigate("/",{
          replace: true
        })
      }
    
  }


  return (
    <div className='Login-component' onSubmit={handleSubmit}>
      <Toaster/>
      <form>
          <div className="login-card">
                <div className="login-card-header">Kayıt Ol</div>
                <div className="login-card-username">Username: <input type="text" value={Remail} onChange={(e) => setREmail(e.target.value)} placeholder='ornek01@gmail.com'/></div>
                <div className="login-card-passaword">Password: <input type="password" value={Rpassword}  onChange={(e) => setRPassword(e.target.value)} placeholder='******'/></div>
                <div className="login-card-button"><button>Kayıt Ol</button> </div>
            </div>
      </form>
    </div>
  )
}

export default Register