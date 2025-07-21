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
    setSortedProducts: (category: string) => void;
}

export const useProductStore = create<State & Actions>((set) => ({
    products,

    deleteProduct: (id) =>
        set((state) => ({
            products: state.products.filter((product) => product.id !== id),
        })),

    setSortedProducts: (category) =>
        set((state) => {
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
            return { products: sortedProducts };
        }),

    updateProduct: (id, updatedProduct) =>
        set((state) => {
            const index = state.products.findIndex(product => product.id === id);

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