import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    activeButton: 0
}

const active = createSlice({
    name: "active",
    initialState,
    reducers: {
        actbtn: (state, action) => {
            state.activeButton = action.payload
        }
    }
})

export const { actbtn } = active.actions

export default active.reducer