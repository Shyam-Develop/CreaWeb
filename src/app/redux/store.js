import { configureStore } from "@reduxjs/toolkit";

import listviewReducer from "./slice/listviewSlice"

export const store = configureStore({
    reducer:{
     listview: listviewReducer,
    }
})

