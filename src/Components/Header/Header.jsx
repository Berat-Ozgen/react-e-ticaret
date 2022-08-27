import React from 'react'
import './Header.css';
import {CgProfile} from 'react-icons/cg';
import {BsHeart} from 'react-icons/bs';
import {GrBasket} from 'react-icons/gr';
import {useContext,mainContext} from '../../Context'
import { Link } from "react-router-dom";



const Header = () => {

  const {dataList,setDataList,active,setActive,filterSelect,setFilterSelect,searchValue,setSearchValue} = useContext(mainContext)

  



  return (
    <div className='header-component'>
              <Link to="/">
                <div className='header-logo'>
                    E-MARKET
                </div>
              </Link> 

        <div className="header-input">
            <input type="text" placeholder='aradıgınız ürün veya katolog' onChange={(e)=> setSearchValue(e.target.value)} />
        </div>

        <div className="header-buttons">
           <div className='log-in'><Link to="login"> <span className='bir'><CgProfile/>  Log-in</span>  </Link> </div> 

            <div className='favorite'><Link to="favorite"> <span className='iki'><BsHeart/>  Favoriler</span>  </Link> </div>

            <div className='sepet'> <Link to="/sepet"> <span className='uc'><GrBasket/> Sepetim</span>  </Link></div> 
        </div>
    </div>
  )
}

export default Header