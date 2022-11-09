import { configureStore } from "@reduxjs/toolkit";
import globalReducer from '../features/counter/globalSlice'

export default configureStore({
    reducer: {
        global: globalReducer,
    },
})