import React from 'react'
import './Header.css';
import {CgProfile} from 'react-icons/cg';
import {BsHeart} from 'react-icons/bs';
import {GrBasket} from 'react-icons/gr';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {logout as logoutHandle} from '../../store/auth';
import toast  from 'react-hot-toast';
import {value} from '../../store/inputValue';




const Header = () => {

  const navigate = useNavigate()
  const {user} = useSelector(state => state.auth)
  const {inpValue} = useSelector(state => state.inputValue)
  const dispatch = useDispatch()
  




  const logoutClick = async() => {
       await logoutHandle()
       dispatch(logoutHandle())
       navigate("/login")
  }

  const basketClick = () => {
     navigate("/sepet")
  }

  const error = () => {
    toast.error("Lütfen once giriş yapınız")
  }

  const favoriteClick = () => {
    navigate("/favorite")
  }

  console.log(inpValue)


  return (
    <div className='header-component'>
              <Link to="/">
                <div className='header-logo'>
                    E-MARKET
                </div>
              </Link> 

        <div className="header-input">
            <input type="text" placeholder='aradıgınız ürün veya katolog' onChange={(e)=> dispatch(value(e.target.value)) } />
        </div>

        <div className="header-buttons">
           <div className='register' onClick={logoutClick} ><Link to="login"> <span className='bir'><CgProfile/> {user ? "çıkış-yap" : "giriş yap"} </span>  </Link> </div> 

            <div className='favorite' onClick={user ? favoriteClick : error} > <span className='iki'><BsHeart/>  Favoriler</span>  </div>

            <div className='sepet' onClick={user ? basketClick : error}> <span className='uc'><GrBasket/> Sepetim</span>  </div> 

        </div>
    </div>
  )
}

export default Header