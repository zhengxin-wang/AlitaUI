import {alitaApi} from "./alitaApi.js";


const apiSlicePath = '/prompts'
const TAG_TYPE_PROMPT = 'Prompt'

export const promptApi = alitaApi.enhanceEndpoints({
    addTagTypes: [TAG_TYPE_PROMPT]
}).injectEndpoints({
// export const promptApi = alitaApi.injectEndpoints({
    endpoints: build => ({
        promptList: build.query({
            query: (projectId) => ({
                url: apiSlicePath + '/prompts/' + projectId,
            }),
            providesTags: (result, error) => {
                if (error) {
                    return []
                }
                return result?.map(i => ({type: TAG_TYPE_PROMPT, id: i.id}))
            }
        }),
    })
})

export const {
    usePromptListQuery,
} = promptApi

