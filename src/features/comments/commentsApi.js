import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { responseCountriesDTO } from './responseCountriesDTO'
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
                return response.map((country) => responseCountriesDTO(country))
            },
        }),
    })
})

export default commentsApi
export const { useGetAllCountriesQuery } = commentsApi