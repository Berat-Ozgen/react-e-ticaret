import { configureStore } from "@reduxjs/toolkit";
import auth from './auth';
import fetchData from './fetchData';
import basketHandle from './basketHandle';



const store = configureStore({
    reducer: {
        auth: auth,
        fetchData: fetchData,
        basketHandle: basketHandle,


    }
})

export default store