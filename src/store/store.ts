import { products } from './../data/products';
import type { Product } from '../utils/types';
import { create } from "zustand";

type State = {
    products: Product[],

}

type Actions = {
    deleteProduct: (id: string) => void,
    addProduct: (product: Product) => void,
    updateProduct: (id: string, updatedProduct: Partial<Product>) => void, // Partial дает возможность обновить не весь объект, а только некторые поля
}

export const useProductStore = create<State & Actions>((set) => ({
    products,

    deleteProduct: (id) =>
        set((state) => ({
            products: state.products.filter((product) => product.id !== id),
        })),





    updateProduct: (id, updatedProduct) =>
        set((state) => {

            const index = state.products.findIndex(product => product.id === id)

            if (index == -1) return state;

            const updated = [...state.products];
            updated[index] = { ...updated[index], ...updatedProduct };
            return { products: updated };

        }),

    addProduct: (product) =>
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
