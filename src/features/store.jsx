import { configureStore } from '@reduxjs/toolkit'
import commentsReducer from './countries/countriesSlice'
import countriesApi from './countries/countriesApi'

export const store = configureStore({


    reducer: {
        [countriesApi.reducerPath]: countriesApi.reducer,
        comments: commentsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(countriesApi.middleware)
})