import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const productsApi = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (builder) => ({
        // Get all products
        getAllProducts: builder.query({
            query: () => '/products'
        })
    })
})

export const {useGetAllProductsQuery} = productsApi