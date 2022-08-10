import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
      // GET ALL
      
    },
  
});


export const {

} = productSlice.actions;

export default productSlice.reducer;