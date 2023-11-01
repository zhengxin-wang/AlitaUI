import {createSlice} from '@reduxjs/toolkit'
import {alitaApi} from "../api/alitaApi.js";


const promptSlice = createSlice({
    name: 'prompts',
    initialState: {
        list: [],
        filteredList: [],
        tagList: [],
    },
    reducers: {
        filterByTag: (state, action) => {
            const payload = action.payload ?? '';
            if (payload === '') {
                state.filteredList = state.list;
                return
            }
            state.filteredList = state.list.filter(item => item.tags.some(({tag}) => tag === payload));
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(alitaApi.endpoints.promptList.matchFulfilled,(state, {payload}) => {
                    state.list = payload
                    state.filteredList = payload
                }
            )
        builder
            .addMatcher(alitaApi.endpoints.tagList.matchFulfilled,(state, {payload}) => {
                    state.tagList = payload
                }
            )
    },
})


export const {name, actions} = promptSlice
export default promptSlice.reducer
