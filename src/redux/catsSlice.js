import { createSlice } from "@reduxjs/toolkit";

const catSlice = createSlice({ 
    name: "cats",
    initialState: [],
    reducers: {
        addCat: (state, action) => {
            state.push(action.payload);
        },
        updateCat: (state, action) => {
            const index = state.findIndex(cat => cat.id === action.payload.id);
            if (index !== -1) state[index] = action.payload;
        },
        deleteCat: (state, action) => {
            return state.filter(cat => cat.id !== action.payload);
        }
    }
});

export const { addCat, updateCat, deleteCat } = catSlice.actions;
export default catSlice.reducer;