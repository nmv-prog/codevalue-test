import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/products";

const initialState = {
    products
}

export const productsReducer = createSlice({
    name: 'products',
    initialState,
    reducers: {
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
    }
});

export const { setSortedProducts } = productsReducer.actions;
export default productsReducer.reducer;