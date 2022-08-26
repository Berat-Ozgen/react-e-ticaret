import { useState } from 'react'
import {mainContext,useContext} from '../../Context';

import './Navbar.css';

const Navbar = () => {

  const {active,setActive,filterSelect,setFilterSelect} = useContext(mainContext)
   


  return (
    <div className='navbar-component'>
       <div onClick={()=> {
          setFilterSelect("")
          setActive(1)
        }} className={active === 1 && `active`}>Tüm ürünler</div>


        <div onClick={()=> {
          setFilterSelect("smartphones")
          setActive(2)
        }} className={active === 2 && `active`}>Akıllı Telefonlar</div>

        <div onClick={()=> {
          setFilterSelect("laptops")
          setActive(3)
        }} className={active === 3 && `active`}>Leptoplar</div>

        <div onClick={()=> {
          setFilterSelect("fragrances")
          setActive(4)
        }} className={active === 4 && `active`}>Parfümler</div>

        <div onClick={()=> {
          setFilterSelect("skincare")
          setActive(5)
        }} className={active === 5 && `active`}>Cilt Bakımı</div>

        <div onClick={()=> {
          setFilterSelect("groceries")
          setActive(6)
        }} className={active === 6 && `active`}>Market Ürünleri</div>
        
        <div onClick={()=>{
          setFilterSelect("home-decoration")
          setActive(7)
        }} className={active === 7 && `active`}>Ev Dekorasyonu</div>
    </div>
  )
}

export default Navbar