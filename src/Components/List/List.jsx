import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {mainContext,useContext} from '../../Context';
 import 'react-toastify/dist/ReactToastify.css';
import './List.css';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
import {getItemData} from '../../store/fetchData'
import {basketAdd} from '../../store/basketHandle'
import {favoriteAdd} from '../../store/favoriteHandle';




const List = () => {

  const dispatch = useDispatch()

  const {filterSelect} = useContext(mainContext)

  const {user} = useSelector(state => state.auth)
  const {productsList} = useSelector(state => state.fetchData)
  const {inpValue} = useSelector(state => state.inputValue)




  useEffect(() => {
    dispatch(getItemData())
  },[dispatch])


  

  function addBasket(veri){
    dispatch(basketAdd(veri))
  }


  const addFavorite = (veri) => {
    dispatch(favoriteAdd(veri))
  }



  const error = () => {
    toast.error("Lütfen once giriş yapınız")
  }



  if(filterSelect === ""){
    return (
      <div className='list-component'>
           <Toaster/>

          {productsList?.filter(data => data.title.toLowerCase().includes(inpValue)).map((item,idx) => (
            <div key={idx} className='card'>
                  <div className='card-sol'>
                     <div className="card-img"><img src={item.images[1]} alt="image malesef yok" /></div>
                  </div>
                  <div className='card-sag'>
                    <div className='card-title-brand'> {item.title}</div>
                    <div className='card-price'>Fiyat : {item.price}$</div>
                    <div className="card-buttons">
                      <button> <Link to={`${item.id}`}> Ürünü incele </Link> </button>
                      <button onClick={user ? () => addFavorite(item) : error}>Favorilere ekle</button>
                      <button onClick={user ? () => addBasket(item) : error}>sepete ekle</button>
                   </div>
                  </div>
            </div> 
      ))}

    </div>
    )
  } else {
    return (

      <div className='list-component'>
        <Toaster/>
          {productsList?.filter(data => data.category === filterSelect).map((item,idx) => (
              <div key={idx} className='card'>
                  <div className='card-sol'>
                       <div className="card-img"><img src={item.images[1]} alt="image malesef yok" /></div>
                  </div>
                  <div className='card-sag'>
                      <div className='card-title-brand'> {item.title}</div>
                      <div className='card-price'>Fiyat : {item.price}$</div>
                      <div className="card-buttons">
                          <button> <Link to={`${item.id}`}> Ürünü incele </Link> </button>
                          <button onClick={user ? () => addFavorite(item) : error}>Favorilere ekle</button>
                          <button onClick={user ? () => addBasket(item) : error}>sepete ekle</button>
                  </div>
              </div>
      </div>
      ))}
    </div> 
    )
  }
}

export default List 

