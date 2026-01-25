import { createSlice } from "@reduxjs/toolkit";


const initialState = [
 { 
    id: 1, 
   name: "Whiskers", 
   position: [59.865, 17.689],
   description: "A playful tabby cat who loves to chase laser pointers.",
 },
  { 
    id: 2, 
    name: "Mittens",
    position: [59.866, 17.690],
    description: "A curious black cat who enjoys exploring new places.",
  },
   { 
    id: 3,
    name: "Shadow",
    position: [59.867, 17.691],
    description: "A shy gray cat who likes to hide in cozy spots.",
 }

]

const catSlice = createSlice({ 
    name: "cats",
    initialState: initialState,
    reducers: {
        addCat: (state, action) => {
        state.push(action.payload);
              },
       updateCat: (state, action) => {   
        const index = state.findIndex(cat => cat.id === action.payload.id);
        if (index !== -1) {
            state[index] = action.payload;
        }
         },
       deleteCat: (state, action) => {   
        return state.filter(cat => cat.id !== action.payload);
         },
    }
});

export const { addCat, deleteCat, updateCat } = catSlice.actions;
export default catSlice.reducer;