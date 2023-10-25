import {createSlice} from '@reduxjs/toolkit'
import {alitaApi} from "../api/alitaApi.js";


const promptSlice = createSlice({
    name: 'prompts',
    initialState: {
        list: []
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(alitaApi.endpoints.promptList.matchFulfilled,(state, {payload}) => {
                    state.list = payload
                }
            )
    },
})


export const {name} = promptSlice
export default promptSlice.reducer
