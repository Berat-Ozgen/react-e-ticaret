import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getItemData = createAsyncThunk("dataItem/getDataItemAsync/", async() => {
    const res = await axios(`https://dummyjson.com/products`)
    return await res.data.products
})

const initialState = {
    productsList: [],
    deneme: []
}

const fetchData = createSlice({
    name: "products",
    initialState,
    reducers: {


    },
    extraReducers: {
        [getItemData.fulfilled]: (state, action) => {
            state.productsList = action.payload;
        }
    }

})




export default fetchData.reducer