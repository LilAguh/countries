import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    darkMode: false,
    select: "",
    countries: [],
    filteredCountries: [],
}


export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setDarkMode: (state, action) => {
            state.push(action.payload)
        },
        addResponse: (state, action) => {
            const { _id, response, seller } = action.payload
            const foudComment = state.find(comment => comment._id === _id)
            if (foudComment) {
                foudComment.response = response
                foudComment.seller = seller
            }
        },
        deleteComment: (state, action) => {
            const commentFound = state.find(comment => comment.id === action.payload)
            if (commentFound) {
                state.splice(state.indexOf(commentFound), 1)
            }
        }

    }
})

export const { setDarkMode, deleteComment, addResponse } = appSlice.actions
export default appSlice.reducer