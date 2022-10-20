import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { countriesResponse } from './countriesResponse'
import api from "../../api"


const commentsApi = createApi({
    reducerPath: "commentsApi",

    baseQuery: fetchBaseQuery({
        baseUrl: api
    }),

    endpoints: (builder) => ({
        getAllCountries: builder.query({
            query: () => ({
                url: "/all",
                method: "GET",
            }),
            transformResponse: (response) => {
                return response.map((country) => countriesResponse(country))
            },
        }),
    })
})

export default commentsApi
export const { useGetAllCountriesQuery } = commentsApi