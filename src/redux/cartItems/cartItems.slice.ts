import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { IDish } from "../../type";

  
const initialState: IDish[] = []

const cartItems = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IDish>) => {
      const existingItem = state.find(item => item.id_dish === action.payload.id_dish);
      if (existingItem) {
        existingItem.countDish += 1;
      } else {
        state.push({ ...action.payload, countDish: 1 });
      }
    },
    removeCartElement: (state, action: PayloadAction<IDish>) => {
      const existingItem = state.find(item => item.id_dish === action.payload.id_dish);
      if (existingItem) {
        if (existingItem.countDish > 1) {
          existingItem.countDish -= 1;
        } else {
          return state.filter(item => item.id_dish !== action.payload.id_dish);
        }
      }
    },
  },
});


export const { addToCart, removeCartElement } = cartItems.actions;
export default cartItems.reducer;