import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
    name: 'global',
    initialState: {
        value: 0,
        products: [],
        cartItems: []
    },
    reducers: {
        fetchApi: (state, {payload}) => {
            state.products = payload
        },
        cartObj: (state, {payload}) => {
            // state.cartItems = payload
            state.cartItems.push(payload)
        },
        deleteCartItem: (state, {payload}) => {
            state.cartItems = state.cartItems.filter((a) => a.id !== payload )
        }
    }
})

export const { fetchApi, cartObj, deleteCartItem } = globalSlice.actions
export default globalSlice.reducer