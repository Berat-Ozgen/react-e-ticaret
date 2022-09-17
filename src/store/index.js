import { configureStore } from "@reduxjs/toolkit";
import auth from './auth';
import fetchData from './fetchData';
import basketHandle from './basketHandle';
import favoriteHandle from './favoriteHandle';
import inputValue from './inputValue';




const store = configureStore({
    reducer: {
        auth: auth,
        fetchData: fetchData,
        basketHandle: basketHandle,
        favoriteHandle: favoriteHandle,
        inputValue: inputValue
    }
})

export default store