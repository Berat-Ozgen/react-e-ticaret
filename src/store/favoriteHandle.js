import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favoriteListItem: []
}


const favoriteHandle = createSlice({
    name: "favoriteHandle",
    initialState,
    reducers: {

        favoriteAdd: (state, action) => {
            const addFind = state.favoriteListItem.find(item => item.id === action.payload.id);
            if (addFind) {
                state.favoriteListItem = [...state.favoriteListItem.filter(item => item.id !== action.payload.id), {
                    id: action.payload.id,
                    name: action.payload.title,
                    img: action.payload.images,
                    price: action.payload.price,
                }]
            } else {
                state.favoriteListItem = [...state.favoriteListItem, {
                    id: action.payload.id,
                    name: action.payload.title,
                    price: action.payload.price,
                    img: action.payload.images,
                }]
            }
        },

        favoriteRemove: (state, action) => {
            state.favoriteListItem = [...state.favoriteListItem.filter(item => item.id !== action.payload)]
        }



    }
})


export const { favoriteAdd, favoriteRemove } = favoriteHandle.actions


export default favoriteHandle.reducer