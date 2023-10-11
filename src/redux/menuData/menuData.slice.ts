import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import { IMenuCategory, IMenuState } from "../../type";

const initialState: IMenuState =  {
    menuData: []
}

const menuData = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<IMenuCategory[]>) => {
            state.menuData = action.payload;
        }
    }
})


export const { setData } = menuData.actions;
export default menuData.reducer;