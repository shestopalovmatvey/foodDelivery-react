import {createSlice} from "@reduxjs/toolkit";
import { IMenuState } from "../../type";

const initialState: IMenuState = {
    menuData: null
}

const menuData = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setData: (state, action) => {
            return action.payload
        }
    }
})


export const { setData } = menuData.actions;
export default menuData.reducer;