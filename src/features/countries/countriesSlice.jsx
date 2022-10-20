import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import commentsApi from "./countriesApi";


const initialState = [
]


export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addComment: (state, action) => {
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

export const { addComment, deleteComment, addResponse } = commentsSlice.actions
export default commentsSlice.reducer