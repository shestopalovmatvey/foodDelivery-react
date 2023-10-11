import {createSlice} from "@reduxjs/toolkit";

const initialState:boolean = false

const cartDrawer = createSlice({
    name: 'cartDrawer',
    initialState,
    reducers: {
        toggleValue: (state) => {
            return !state
        }
    }
})


export const { toggleValue } = cartDrawer.actions;
export default cartDrawer.reducer;