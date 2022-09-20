import thunk from "redux-thunk";
import reducer from "../reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer,
    middleware: [thunk],
    devTools: false,
})

export default store;