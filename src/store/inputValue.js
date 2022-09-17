import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    inpValue: ""
}

const inputValue = createSlice({
    name: "inputValue",
    initialState,
    reducers: {
        value: (state, action) => {
            state.inpValue = action.payload
        }
    }

})

export const { value } = inputValue.actions
export default inputValue.reducer