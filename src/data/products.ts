import type { Product } from "../utils/types";
import logo from '../images/codevalue_logo.jpg';

export const products: Product[] = [
    {
        id: crypto.randomUUID(),
        image: logo,
        name: "BBB",
        description: "Product 1 description.",
        price: 199.99,
        creationDate: new Date('2025-07-19').toISOString(),
    },
    {
        id: crypto.randomUUID(),
        image: logo,
        name: "GGG",
        description: "Product 2 description.",
        price: 79.99,
        creationDate: new Date('2025-08-15').toISOString(),
    },
    {
        id: crypto.randomUUID(),
        image: logo,
        name: "FFF",
        description: "Product 3 description.",
        price: 25.50,
        creationDate: new Date('2025-03-25').toISOString(),
    },
    {
        id: crypto.randomUUID(),
        image: logo,
        name: "AAA",
        description: "Product 4 description.",
        price: 45.00,
        creationDate: new Date('2025-06-11').toISOString(),
    },
];