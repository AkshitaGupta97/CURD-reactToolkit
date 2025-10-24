
import { configureStore } from "@reduxjs/toolkit";
import recordSlice from "./recordSlice";

export const store = configureStore({
    reducer: {
        records: recordSlice,

    }
})