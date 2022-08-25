import './App.css';
import {mainContext} from './Context';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Favorite from './Components/Favorite/Favorite';

function App() {

  const [dataList, setDataList] = useState([])
  const [active, setActive] = useState(0)
  const [filterSelect, setFilterSelect] = useState("")
  const [searchValue, setSearchValue] = useState("")
  const [basket, setBasket] = useState([])
  const [favoriteList, setFavoriteList] = useState([])


    const fecthData = async() => {
        await axios.get("https://dummyjson.com/products").then(res=> setDataList(res.data.products))
    }


    useEffect(()=> {
        fecthData()
    }, [])

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
      setFavoriteList

    }


 
  return (
  <mainContext.Provider value={data}>
    <BrowserRouter>
      <Routes>
      
        <Route index element={<Home/>}/>
        <Route path="favorite" element={<Favorite />}/>

      </Routes>
    </BrowserRouter>
  </mainContext.Provider>
  );
}

export default App;
