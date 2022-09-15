import { configureStore } from "@reduxjs/toolkit";
import auth from './auth';
import fetchData from './fetchData';


const store = configureStore({
    reducer: {
        auth: auth,
        fetchData: fetchData,

    }
})

export default store