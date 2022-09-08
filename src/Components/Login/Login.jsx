import React, { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [Lemail,setLEmail] = useState("")
    const [Lpassword,setLPassword] = useState("")
    const navigate = useNavigate()

  return (
    <div className='Login-component'>
      <Toaster/>
      <form>
          <div className="login-card">
                <div className="login-card-header">Giriş yap</div>
                <div className="login-card-username">Username: <input type="text" value={Lemail} onChange={(e) => setLEmail(e.target.value)} placeholder='ornek01@gmail.com'/></div>
                <div className="login-card-passaword">Passaword: <input type="password" value={Lpassword}  onChange={(e) => setLPassword(e.target.value)} placeholder='******'/></div>
                <div className="login-card-button"><button>Giriş yap</button> </div>
            </div>
      </form>
    </div>  )
}

export default Login