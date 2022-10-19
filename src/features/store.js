import { configureStore } from '@reduxjs/toolkit'
import commentsReducer from './comments/commentsSlice'
import commentsApi from './comments/commentsApi'

export const store = configureStore({


    reducer: {
        [commentsApi.reducerPath]: commentsApi.reducer,
        comments: commentsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(commentsApi.middleware)
})