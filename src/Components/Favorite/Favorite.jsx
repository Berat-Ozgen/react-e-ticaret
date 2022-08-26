import React from 'react'
import Header from '../Header/Header'
import {mainContext,useContext} from '../../Context'
import './Favorite.css'

const Favorite = () => {

    const {dataList,setDataList,active,setActive,filterSelect,setFilterSelect,searchValue,setSearchValue,basket,setBasket,favoriteList,setFavoriteList} = useContext(mainContext)



    const listDelete = (id) => {
            setFavoriteList([...favoriteList.filter(item => item.id !== id)])
    }

    console.log(favoriteList.length)

    if(favoriteList.length ===  0) {
      return (<div>

          <Header/>

          <div className='emptyList'> Şuanda Favoriler Kısmında birşey yok</div>
     

        </div>)
    } else {

      
  return (
    <>
        <Header/>
        <div className='favorite-component'>

             {favoriteList.filter(data => data.name.includes(searchValue))?.map(item => (
                   <div className="favorite-card">
                   <div className="favorite-card-img"><img src={item.img[0]} alt="" /></div>
                   <div className="favorite-card-title">iphone / {item.name}</div>
                   <div className="favorite-card-price">Fiyat : {item.price} $</div>
                   <div className="favorite-card-stock">Stock : 100 Adet</div>
                   <div className="favorite-card-buttons">
                       <button onClick={() => listDelete(item.id)}>Listeden Çıkar</button>
                   </div>
               </div>
            ))}
          
        </div>
        
    </>
  )

    }



}

export default Favorite


