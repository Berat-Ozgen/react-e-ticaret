import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {login} from '../../firebase';
import {login as loginHandle} from '../../store/auth';
import './Login.css'



const Login = () => {
    const [Lemail,setLEmail] = useState("")
    const [Lpassword,setLPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleSubmit = async (e) => {
      e.preventDefault()
      const user = await login(Lemail,Lpassword)
      if (user) {
          dispatch(loginHandle(user))
          navigate("/",{
          replace: true
        })
      }
      
    }
  

  return (
    <div className='Login-component'>
      <Toaster/>
      <form onSubmit={handleSubmit}>
          <div className="login-card">
                <div className="login-card-header">Giriş yap</div>
                <div className="login-card-username">Username: <input type="text" value={Lemail} onChange={(e) => setLEmail(e.target.value)} placeholder='ornek01@gmail.com'/></div>
                <div className="login-card-passaword">Password: <input type="password" value={Lpassword}  onChange={(e) => setLPassword(e.target.value)} placeholder='******'/></div>

            <div className='buttons'>
                <div className="login-card-button"><button>Giriş yap</button> </div>
                <div onClick={() => navigate("/register")} className="login-card-button"><button>Kayıt ol</button> </div>
            </div>
              

            </div>
      </form>
    </div>  )
}

export default Login