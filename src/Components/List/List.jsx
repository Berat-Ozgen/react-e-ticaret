import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {mainContext,useContext} from '../../Context';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import './List.css';

const List = () => {

  const {dataList,setDataList,active,setActive,filterSelect,setFilterSelect,searchValue,setSearchValue,basket,setBasket,favoriteList,setFavoriteList} = useContext(mainContext)



  function addBasket(veri){
    const addFind = basket.find(item => item.id === veri.id);
    if(addFind) {
      addFind.amount += 1;
      setBasket([...basket.filter(item => item.id !== veri.id),{
        id : veri.id,
        name: veri.title,
        img : veri.images,
        price  : veri.price,
        amount : addFind.amount
      }])
    } else {
      setBasket([...basket,{
        id : veri.id,
        name: veri.title,
        price  : veri.price,
        img : veri.images,
        amount : 1
      }])
    }
  }


  const favoriteAdd = (veri) => {

    const addFind = favoriteList.find(item => item.id === veri.id);
    if(addFind) {
      setFavoriteList([...favoriteList.filter(item => item.id !== veri.id),{
        id : veri.id,
        name: veri.title,
        img : veri.images,
        price  : veri.price,
      }])
    } else {
      setFavoriteList([...favoriteList,{
        id : veri.id,
        name: veri.title,
        price  : veri.price,
        img : veri.images,
      }])
    }
    
  }

  console.log(favoriteList)




  if(filterSelect === ""){

    return (
      <div className='list-component'>
      
      {dataList?.filter(data => data.title.toLowerCase().includes(searchValue)).map((item,idx) => (
          <div key={idx} className='card'>
          <div className='card-sol'>
          <div className="card-img"><img src={item.images[1]} alt="image malesef yok" /></div>
          </div>
          <div className='card-sag'>
          <div className='card-title-brand'> {item.title}</div>
          <div className='card-price'>Fiyat : {item.price}$</div>
          <div className="card-buttons">
          <button onClick={() => favoriteAdd(item)}>Favorilere ekle</button>
          <button onClick={() => addBasket(item)}>sepete ekle</button>
          </div>
          </div>

      </div>
      
      ))}

      

        
    </div>
    )


  } else {

    return (

      <div className='list-component'>
        
      {dataList?.filter(data => data.category === filterSelect).map((item,idx) => (
          <div key={idx} className='card'>
          <div className='card-sol'>
          <div className="card-img"><img src={item.images[1]} alt="image malesef yok" /></div>
          </div>
          <div className='card-sag'>
          <div className='card-title-brand'> {item.title}</div>
          <div className='card-price'>Fiyat : {item.price}$</div>
          <div className="card-buttons">
          <button onClick={() => favoriteAdd(item)}>Favorilere ekle</button>
          <button onClick={() => addBasket(item)}>sepete ekle</button>
          </div>
          </div>
  
      </div>
      
      ))}
  
      
  
        
    </div> 
     
    )

  }
    

  
}

export default List

