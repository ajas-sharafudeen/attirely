import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  isLoading: False,
};

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async ({ userId, productId, quantity }) => {
    const response = await axios.post(
      'http://localhost:5000/api/shop/cart/add',
      {
        userId,
        productId,
        quantity,
      }
    );
    return response.data;
  }
);

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (usedId) => {
    const response = await axios.get(
      `http://localhost:5000/api/shop/cart/get/${usedId}`
    );
    return response.data;
  }
);

export const deleteCartItem = createAsyncThunk(
  'cart/deleteCartItem',
  async ({ userId, productId }) => {
    const response = await axios.delete(
      `http://localhost:5000/api/shop/cart/${userId}/${productId}`
    );
    return response.data;
  }
);

export const updateCartQuantity = createAsyncThunk(
  'cart/updateCartQuantity',
  async ({ userId, productId, quantity }) => {
    const response = await axios.put(
      'http://localhost:5000/api/shop/cart/update-cart',
      {
        userId,
        productId,
        quantity,
      }
    );
    return response.data;
  }
);

const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
