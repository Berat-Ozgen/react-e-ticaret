import { configureStore } from "@reduxjs/toolkit";
import auth from './auth';
import fetchData from './fetchData';
import basketHandle from './basketHandle';
import favoriteHandle from './favoriteHandle';



const store = configureStore({
    reducer: {
        auth: auth,
        fetchData: fetchData,
        basketHandle: basketHandle,
        favoriteHandle: favoriteHandle


    }
})

export default store