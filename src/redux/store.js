import {configureStore} from '@reduxjs/toolkit';
import catsReducer from './catsSlice';

export const store = configureStore({
    reducer: {
        cats: catsReducer,
    },
});

export default store;
