import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    select: ""
}

const filterSelect = createSlice({
    name: "filterSelected",
    initialState,
    reducers: {
        SelectFilter: (state, action) => {
            state.select = action.payload
        }
    }
})

export const { SelectFilter } = filterSelect.actions
export default filterSelect.reducer