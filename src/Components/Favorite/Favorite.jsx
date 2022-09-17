import React from "react";
import { mainContext, useContext } from "../../Context";
import "./Favorite.css";
import { favoriteRemove } from "../../store/favoriteHandle";
import { useDispatch, useSelector } from "react-redux";

const Favorite = () => {
  const dispatch = useDispatch();
  const { favoriteListItem } = useSelector((state) => state.favoriteHandle);
  const { searchValue } = useContext(mainContext);

  const listDelete = (id) => {
    dispatch(favoriteRemove(id));
  };

  if (favoriteListItem.length === 0) {
    return (
      <div className="emptyList">
        <div> Şuanda Favoriler Kısmında birşey yok</div>
      </div>
    );
  } else {
    return (
      <>
        <div className="favorite-component">
          {favoriteListItem
            .filter((data) => data.name.includes(searchValue))
            ?.map((item) => (
              <div key={item.id} className="favorite-card">
                <div className="favorite-card-img">
                  <img src={item.img[0]} alt="" />
                </div>
                <div className="favorite-card-title">iphone / {item.name}</div>
                <div className="favorite-card-price">
                  Fiyat : {item.price} $
                </div>
                <div className="favorite-card-stock">Stock : 100 Adet</div>
                <div className="favorite-card-buttons">
                  <button onClick={() => listDelete(item.id)}>
                    Listeden Çıkar
                  </button>
                </div>
              </div>
            ))}
        </div>
      </>
    );
  }
};

export default Favorite;
