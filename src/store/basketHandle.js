import { createSlice } from '@reduxjs/toolkit'
import { verifyBeforeUpdateEmail } from 'firebase/auth';


const initialState = {
    basketListItem: [],

}

const basketHandle = createSlice({
    name: "basketHandle",
    initialState,
    reducers: {
        basketAdd: (state, action) => {
            const addFind = state.basketListItem.find(item => item.id === action.payload.id);
            if (addFind) {
                addFind.amount += 1;
                state.basketListItem = [...state.basketListItem.filter(item => item.id !== action.payload.id), {
                    id: action.payload.id,
                    name: action.payload.title,
                    img: action.payload.images,
                    price: action.payload.price,
                    amount: addFind.amount
                }]
            } else {
                state.basketListItem = [...state.basketListItem, {
                    id: action.payload.id,
                    name: action.payload.title,
                    price: action.payload.price,
                    img: action.payload.images,
                    amount: 1
                }]
            }
        },
        basketRemove: (state, action) => {
            const removeFind = state.basketListItem.find(item => item.id === action.payload.id);

            removeFind.amount -= 1;
            if (removeFind.amount === 0) {
                state.basketListItem = [...state.basketListItem.filter(item => item.id !== action.payload.id)]
            } else {
                state.basketListItem = [...state.basketListItem.filter(item => item.id !== action.payload.id), {
                    id: action.payload.id,
                    name: action.payload.name,
                    img: action.payload.img,
                    price: action.payload.price,
                    amount: removeFind.amount
                }]
            }

        }


    }
})

export const { basketAdd, basketRemove } = basketHandle.actions


export default basketHandle.reducer