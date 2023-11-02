import { configureStore } from '@reduxjs/toolkit';
import {
    middleware as alitaMiddleware,
    reducer as alitaReducer,
    reducerPath as alitaReducerPath
} from "./api/alitaApi";
import MockReducer, { name as mockReducerName } from "./reducers/mock";
import PromptReducer, { name as promptReducerName } from "./reducers/prompts";
import UserReducer, { name as userReducerName } from "./reducers/user";


const Store = configureStore({
    reducer: {
        [alitaReducerPath]: alitaReducer,
        [mockReducerName]: MockReducer,
        [promptReducerName]: PromptReducer,
        [userReducerName]: UserReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([alitaMiddleware]),
})

export default Store
