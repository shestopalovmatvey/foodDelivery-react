import { configureStore, combineReducers } from "@reduxjs/toolkit";
import menuData from "./menuData/menuData.slice";
import cartDrawer from './cartDrawer/cartDrawer.slice'
import cartSlice from './cartItems/cartItems.slice'
import timeSlice from './timeOfOrder/timeOfOrder.slice'

const rootReducer = combineReducers({
    menu: menuData,
    cartIsOpen: cartDrawer,
    cartItems: cartSlice,
    timeOrder: timeSlice,
})

const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>

export default store;
