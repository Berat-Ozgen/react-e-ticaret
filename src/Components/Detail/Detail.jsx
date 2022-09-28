import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './Detail.css';

const Detail = () => {
    const [productDetail,setProductDetail] = useState([])
    
    const {id} = useParams()

    const detailData = () => {
        axios.get(`https://dummyjson.com/products/${id}`).then(res => setProductDetail([res.data]))
    }

    console.log(productDetail)

    useEffect(()=> {
        detailData()
    },[])

  return (
    <div className='detail-component'>
        

       

            {productDetail.map((item)=> (
            <div key={item.id} className="detail-card">
                  <div className='sol'>
                  <div className="detail-img">
                      <img src={item.images[0]} alt="" />
                  </div>
               </div>
               <div className='sag'>
                  <div className="detail-brand"> <span>Markası</span> : {item.brand}</div>
                  <div className="detail-category"><span>Türü</span>: {item.category}</div>
                  <div className="detail-description"><span>Serisi</span>: {item.description}</div>
                  <div className="detail-price"><span>Fiyatı</span>: {item.price} $</div>
                  <div className="detail-rating"><span>Yıldızı</span>: {item.rating}</div>
                  <div className="detail-stock"><span>Stock</span>: {item.stock}</div>
               </div>
               
         </div>
            ))} 


            <div className="yorumlar">
                
            </div>
        
       




        
    </div>
  )
}

export default Detail

