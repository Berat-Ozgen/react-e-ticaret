import React from 'react'
import {mainContext,useContext} from '../../Context'
import   './Basket.css'
import {useDispatch, useSelector} from 'react-redux'
import {basketRemove} from '../../store/basketHandle'





const Basket = () => {
    const {cost} = useContext(mainContext)

    const dispatch = useDispatch()
    const {basketListItem} = useSelector(state => state.basketHandle)


    console.log(basketListItem)

    function removeBasket(veri){
       dispatch(basketRemove(veri))
      }


     


      if (basketListItem.length === 0) {
        return(
          <>
            <div className='emptyList'> suanda sepetinizde bir urun yok</div>
          </>
        )
      }

  return (
    <>
        <div className='basket-component'>
            <div className='cost'>Ödiceginiz Miktar: {cost}$</div>
                {basketListItem?.map((item) => (
                    <div key={item.id} className="basket-card">
                      <div className="top">
                        <div className="basket-card-img"><img src={item.img[0]} alt="" /></div>
                      </div>
                      <div className="bottom">
                          <div className="basket-card-title">iphone / {item.name}</div>
                          <div className="basket-card-price">Fiyat : {item.price} $</div>
                          <div className="basket-card-stock">Stock : 100 Adet</div>
                          <div className="basket-card-adet"> {item.amount} Adet</div>
                          <div className="basket-card-buttons">
                            <button onClick={() => removeBasket(item)}>Sepetten  Çıkar</button>
                     </div>
                      </div>
                 
              </div>
            ))}
        </div>
    </>
  )
}
export default Basket