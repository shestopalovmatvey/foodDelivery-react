import { createSlice } from "@reduxjs/toolkit";

const initialState: string | null = null

const timeOfOrder = createSlice({
    name: 'timeOfOrder',
    initialState,
    reducers: {
        setTime: (state, action) => {
            return action.payload
        }
    }
})

export const { setTime } = timeOfOrder.actions;
export default timeOfOrder.reducer;