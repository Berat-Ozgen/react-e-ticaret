import React from 'react'
import {mainContext,useContext} from '../../Context'
import   './Basket.css'
import Slider from "react-slick";




const Basket = () => {
    const {dataList,setDataList,active,setActive,filterSelect,setFilterSelect,searchValue,setSearchValue,basket,setBasket,favoriteList,setFavoriteList,cost,setCost} = useContext(mainContext)


    function removeBasket(veri){
        const removeFind = basket.find(item => item.id === veri.id);
        removeFind.amount -=1;
        if(removeFind.amount === 0)
        {
          setBasket([...basket.filter(item => item.id !== veri.id)]);
        }
        else
        {
          setBasket([...basket.filter(item => item.id !== veri.id),
          {
            id : veri.id,
            name: veri.name,
            img : veri.img,
            price  : veri.price,
            amount : removeFind.amount
          }])
        }
      }


      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };




      if (basket.length === 0) {

        return(
          <>
                 <div className='slider'>
        <Slider {...settings}>
          <div>
              <img className='slider-img' src="https://dummyjson.com/image/i/products/1/4.jpg" alt="" />
          </div>
          <div>
             <img className='slider-img' src="https://dummyjson.com/image/i/products/2/3.jpg" alt="" />
          </div>
          <div>
             <img className='slider-img' src="https://dummyjson.com/image/i/products/7/1.jpg" alt="" />          </div>
          <div>
              <img className='slider-img' src="https://dummyjson.com/image/i/products/4/4.jpg" alt="" />          </div>
          <div>
              <img className='slider-img' src="https://dummyjson.com/image/i/products/5/2.jpg" alt="" />          </div>
          <div>
             <img className='slider-img' src="https://dummyjson.com/image/i/products/6/4.jpg" alt="" />            </div>
        </Slider>
      </div>


            <div className='emptyList'> suanda sepetinizde bir urun yok</div>
          </>
        )


      }




  return (
    <>
        {/* <Header/>    */}

        <div className='basket-component'>

            <div className='cost'>Ödiceginiz Miktar: {cost}$</div>

            {basket.map((item) => (
                <div key={item.id} className="basket-card">
                <div className="basket-card-img"><img src={item.img[0]} alt="" /></div>
                <div className="basket-card-title">iphone / {item.name}</div>
                <div className="basket-card-price">Fiyat : {item.price} $</div>
                <div className="basket-card-stock">Stock : 100 Adet</div>
                <div className="basket-card-adet"> {item.amount} Adet</div>
                <div className="basket-card-buttons">
                    <button onClick={() => removeBasket(item)}>Sepetten  Çıkar</button>
                </div>
                </div>
            ))}

 
        </div>


    </>
  )
}

export default Basket


{/* <div className="basket-card">
<div className="basket-card-img"><img src="https://dummyjson.com/image/i/products/1/1.jpg" alt="" /></div>
<div className="basket-card-title">iphone / iphone</div>
<div className="basket-card-price">Fiyat : 1000 $</div>
<div className="basket-card-stock">Stock : 100 Adet</div>
<div className="basket-card-adet"> 100 Adet</div>
<div className="basket-card-buttons">
    <button>Sepetten  Çıkar</button>
</div>
</div> */}
