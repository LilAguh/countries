import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice'
import countriesApi from './countries/countriesApi'

export const store = configureStore({


    reducer: {
        [countriesApi.reducerPath]: countriesApi.reducer,
        app: appSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(countriesApi.middleware)
})