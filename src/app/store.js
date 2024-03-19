import { configureStore } from '@reduxjs/toolkit'

import {setUpListeners} from "@reduxjs/toolkit/query";
import {productsApi} from "./service/dummyData"


export const store = configureStore({
  reducer: {
    [productsApi.recuderPath]: productsApi
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
})