import {mainContext,useContext} from '../../Context';
import {useDispatch,useSelector} from 'react-redux';
import {actbtn} from '../../store/active';
import './Navbar.css';



const Navbar = () => {

  const dispatch = useDispatch()
  const {activeButton} = useSelector(state => state.active)
  const {setFilterSelect} = useContext(mainContext)
   


  return (
    <div className='navbar-component'>
       <div onClick={()=> {
          setFilterSelect("")
          dispatch(actbtn(1))
        }} className={activeButton === 1 && `active`}>Tüm ürünler</div>


        <div onClick={()=> {
          setFilterSelect("smartphones")
          dispatch(actbtn(2))
        }} className={activeButton === 2 && `active`}>Akıllı Telefonlar</div>

        <div onClick={()=> {
          setFilterSelect("laptops")
          dispatch(actbtn(3))

        }} className={activeButton === 3 && `active`}>Leptop</div>

        <div onClick={()=> {
          setFilterSelect("fragrances")
          dispatch(actbtn(4))

        }} className={activeButton === 4 && `active`}>Parfümler</div>

        <div onClick={()=> {
          setFilterSelect("skincare")
          dispatch(actbtn(5))

        }} className={activeButton === 5 && `active`}>Cilt Bakımı</div>

        <div onClick={()=> {
          setFilterSelect("groceries")
          dispatch(actbtn(6))

        }} className={activeButton === 6 && `active`}>Market Ürünleri</div>
        
        <div onClick={()=>{
          setFilterSelect("home-decoration")
          dispatch(actbtn(7))
        }} className={activeButton === 7 && `active`}>Ev Dekorasyonu</div>
    </div>
  )
}

export default Navbar