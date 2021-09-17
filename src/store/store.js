// @ts-nocheck
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'


export const useStore = create(set => ({
    products : [],
    setProducts : (product) => set({
        products : product
    }),
    selectedProduct : {},
    setSelectedProduct : (product) => set({
        selectedProduct : product
    })
}))

