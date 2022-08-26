import './App.css';
import {mainContext} from './Context';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Favorite from './Components/Favorite/Favorite';
import Basket from './Components/Basket/Basket';

function App() {

  const [dataList, setDataList] = useState([])
  const [active, setActive] = useState(0)
  const [filterSelect, setFilterSelect] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [basket, setBasket] = useState([])
  const [favoriteList, setFavoriteList] = useState([])
  const [cost,setCost] = useState("")


    const fecthData = async() => {
        await axios.get("https://dummyjson.com/products").then(res=> setDataList(res.data.products))
    }


    useEffect(()=> {
        fecthData()
        const totalPrice = basket.reduce((pre,basket) => pre +(basket.amount*basket.price),0);
        setCost(totalPrice);
    }, [basket])

    const data = {
      dataList,
      setDataList,
      active,
      setActive,
      filterSelect,
      setFilterSelect,
      searchValue,
      setSearchValue,
      basket,
      setBasket,
      favoriteList,
      setFavoriteList,
      cost,
      setCost

    }


 
  return (
  <mainContext.Provider value={data}>
    <BrowserRouter>
      <Routes>
      
        <Route index element={<Home/>}/>
        <Route path="favorite" element={<Favorite />}/>
        <Route path="sepet" element={<Basket />}/>


      </Routes>
    </BrowserRouter>
  </mainContext.Provider>
  );
}

export default App;
