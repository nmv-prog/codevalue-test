import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/products";

const initialState = {
    products
}

export const productsReducer = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // deleteProduct(state, action) {
        //     state.products = state.products.filter(product => product.id !== action.payload.id);
        // },
        setSortedProducts(state, action) {
            const category = action.payload;
            let sortedProducts;
            switch (category) {
                case 'Name':
                    sortedProducts = [...state.products].sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'Recently Added':
                    sortedProducts = [...state.products].sort((a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime());
                    break;
                case 'All':
                default:
                    sortedProducts = [...state.products].sort((a, b) => a.id.localeCompare(b.id));
                    break;
            }
            state.products = sortedProducts;
        },
        updateProduct(state, action) {

            const { id, updatedProduct } = action.payload;

            const index = state.products.findIndex(product => product.id === id);

            if (index !== -1) {
                state.products[index] = { ...state.products[index], ...updatedProduct };
            }
        },
        // addProduct(state, action) {
        //     state.products.push(action.payload);
        // }
    }
});

export const { setSortedProducts, updateProduct } = productsReducer.actions;
export default productsReducer.reducer;