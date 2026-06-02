import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

import { getMockProductDetails } from "@/feature/products/data/mockdata";
import { ProductDetails } from "@/feature/products/productDetails/types/productDetailsType.ts/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProductDetails: builder.query<ProductDetails, string>({
      queryFn: async (id) => ({
        data: getMockProductDetails(id),
      }),
      providesTags: (_result, _error, id) => [{ type: "Product", id }],
    }),
  }),
});

export const { useGetProductDetailsQuery } = productsApi;
