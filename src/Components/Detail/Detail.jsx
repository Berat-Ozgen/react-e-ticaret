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
                  <div className="detail-brand">Markası: {item.brand}</div>
                  <div className="detail-category">Türü: {item.category}</div>
                  <div className="detail-description">Serisi: {item.description}</div>
                  <div className="detail-price">Fiyatı: {item.price} $</div>
                  <div className="detail-rating">Yıldızı: {item.rating}</div>
                  <div className="detail-stock">Stock: {item.stock}</div>
               </div>
               
         </div>
            ))} 


            <div className="yorumlar">
                
            </div>
        
       




        
    </div>
  )
}

export default Detail

{/* <div className='sol'>
<div className="detail-img">
    <img src="https://dummyjson.com/image/i/products/1/1.jpg" alt="" />
</div>
</div>
<div className='sag'>
<div className="detail-brand">Markası: samsung</div>
<div className="detail-category">Türü: smartphones</div>
<div className="detail-description">Serisi: iphone 10</div>
<div className="detail-price">Fiyatı: 1000 $</div>
<div className="detail-rating">Yıldızı 4.3</div>
<div className="detail-stock">Stock: 100</div>
</div> */}