import { configureStore, combineReducers } from "@reduxjs/toolkit";
import menuData from "./menuData/menuData.slice";
import cartDrawer from './cartDrawer/cartDrawer.slice'
import cartSlice from './cartItems/cartItems.slice'
import timeSlice from './timeOfOrder/timeOfOrder.slice'

const reducers = combineReducers({
    menu: menuData,
    cartIsOpen: cartDrawer,
    cartItems: cartSlice,
    timeOrder: timeSlice,
})

export const store = configureStore({
    reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch