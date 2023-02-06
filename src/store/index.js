import {configureStore} from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { appReducers } from "../reducers";

 
const store = configureStore({
    reducer:{
        app: appReducers
    },
   /*  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,thunk) */
});

export default store