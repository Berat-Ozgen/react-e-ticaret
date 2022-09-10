import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || false,
}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload))
            state.user = action.payload
            console.log(state.user)
        },
        logout: (state) => {
            localStorage.removeItem("user")
            state.user = false
        },
        register: (state, action) => {
            localStorage.setItem("user", JSON.stringify(action.payload))
            state.user = action.payload
        }
    }
})

export const { login, logout, register } = auth.actions

export default auth.reducer