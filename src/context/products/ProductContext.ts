import { createContext } from 'react'
import { APIResponse } from '../../Interfaces/products';

interface ProductContextValues {
    isCartProductsOpen: boolean,
    products: ProductWithCount[],
    totalPrice: number,
    totalProducts: number,
    addProduct: (product: APIResponse, quantity: number) => void,
    onCloseCartProducts: () => void,
    onOpenCartProducts: () => void,
    removeProduct: (id: number) => void,
    substractProduct: (id: number, quantity: number) => void
    closeCart: () => void;
    successfulPurchase: () => void,
    toggleCartProducts: () => void
}


export interface ProductWithCount extends APIResponse {
    count: number,
}


export const ProductContext = createContext<ProductContextValues>({} as ProductContextValues) 