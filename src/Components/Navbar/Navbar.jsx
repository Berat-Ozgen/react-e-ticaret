import {useDispatch,useSelector} from 'react-redux';
import {actbtn} from '../../store/active';
import {SelectFilter} from '../../store/filterSelect'
import './Navbar.css';



const Navbar = () => {

  const dispatch = useDispatch()
  const {activeButton} = useSelector(state => state.active)

   


  return (
    <div className='navbar-component'>
       <div onClick={()=> {
          dispatch(SelectFilter(""))
          dispatch(actbtn(1))
        }} className={activeButton === 1 && `active`}>Tüm ürünler</div>


        <div onClick={()=> {
          dispatch(SelectFilter("smartphones"))
          dispatch(actbtn(2))
        }} className={activeButton === 2 && `active`}>Akıllı Telefonlar</div>

        <div onClick={()=> {
          dispatch(SelectFilter("laptops"))
          dispatch(actbtn(3))
        }} className={activeButton === 3 && `active`}>Leptop</div>

        <div onClick={()=> {
         dispatch(SelectFilter("fragrances"))         
          dispatch(actbtn(4))
        }} className={activeButton === 4 && `active`}>Parfümler</div>

        <div onClick={()=> {
          dispatch(SelectFilter("skincare"))         
          dispatch(actbtn(5))

        }} className={activeButton === 5 && `active`}>Cilt Bakımı</div>

        <div onClick={()=> {
         dispatch(SelectFilter("groceries"))         
          dispatch(actbtn(6))

        }} className={activeButton === 6 && `active`}>Market Ürünleri</div>
        
        <div onClick={()=>{
          dispatch(SelectFilter("home-decoration"))         
          dispatch(actbtn(7))
        }} className={activeButton === 7 && `active`}>Ev Dekorasyonu</div>
    </div>
  )
}

export default Navbar