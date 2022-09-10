import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../Header/Header'
import List from '../List/List'
import Navbar from '../Navbar/Navbar'

const Home = () => {
    const {user} = useSelector(state => state.auth)

      return (
        <div>
            <Navbar/>
            <List/>
    
        </div>
      )
    }
  


export default Home