import { createSlice } from '@reduxjs/toolkit'
import { verifyBeforeUpdateEmail } from 'firebase/auth';


const initialState = {
    basketListItem: [],

}

const basketHandle = createSlice({
    name: "basketHandle",
    initialState,
    reducers: {
        add: (state, aciton) => {
            const addFind = state.basketListItem.find(item => item.id === aciton.payload.id);
            if (addFind) {
                addFind.amount += 1;
                state.basketListItem = [...state.basketListItem.filter(item => item.id !== aciton.payload.id), {
                    id: aciton.payload.id,
                    name: aciton.payload.title,
                    img: aciton.payload.images,
                    price: aciton.payload.price,
                    amount: addFind.amount
                }]
            } else {
                state.basketListItem = [...state.basketListItem, {
                    id: aciton.payload.id,
                    name: aciton.payload.title,
                    price: aciton.payload.price,
                    img: aciton.payload.images,
                    amount: 1
                }]
            }
        },
        remove: (state, aciton) => {
            const removeFind = state.basketListItem.find(item => item.id === aciton.payload.id);

            removeFind.amount -= 1;
            if (removeFind.amount === 0) {
                state.basketListItem = [...state.basketListItem.filter(item => item.id !== aciton.payload.id)]
            } else {
                state.basketListItem = [...state.basketListItem.filter(item => item.id !== aciton.payload.id), {
                    id: aciton.payload.id,
                    name: aciton.payload.name,
                    img: aciton.payload.img,
                    price: aciton.payload.price,
                    amount: removeFind.amount
                }]
            }

        }


    }
})

export const { add, remove } = basketHandle.actions


export default basketHandle.reducer