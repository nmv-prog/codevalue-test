import { products } from './../data/products';
import type { Product } from '../utils/types';
import { create } from "zustand";

type State = {
    products: Product[],
    
}

type Actions = {
    deleteProduct: (id: string) => void,
    addProduct: (product: Product) => void,
}

export const useProductStore = create<State & Actions>((set) => ({
    products,

    deleteProduct: (id: string) =>
        set((state) => ({
            products: state.products.filter((product) => product.id !== id),
        })),

    addProduct: (product: Product) => 
        set((state) => ({
            products: [...state.products, product],
        })),
}))

































































// import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
// import productsReducer from "../reducers/productsReducer";

// export const store = configureStore({
//     reducer: {
//         products: productsReducer,
//     },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
