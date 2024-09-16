const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isLoading: false,
  productList: [],
};

export const fetchAllFilteredProducts = createAsyncThunk(
  '/products/fetchAllProducts',
  async () => {
    const result = await axios.get(
      'http://localhost:5000/api/shop/products/get'
    );

    return result?.data;
  }
);

const shoppingProductSlice = createSlice({
  name: 'shoppingProducts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllFilteredProducts)
  },
});
