import { configureStore } from '@reduxjs/toolkit'
import UserReducer, {name as userReducerName} from "./reducers/user"
import PromptReducer, {name as promptReducerName} from "./reducers/prompts"
import {middleware as alitaMiddleware, reducer as alitaReducer, reducerPath as alitaReducerPath} from "./api/alitaApi";


const Store = configureStore({
    reducer: {
        [userReducerName]: UserReducer,
        [promptReducerName]: PromptReducer,
        [alitaReducerPath]: alitaReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([alitaMiddleware]),
})

export default Store
