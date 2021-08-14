import React, { useEffect } from 'react'
// @ts-nocheck
import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'


export const useStore = create(set => ({
    products: [],
    setProducts: (product) => set({
        products: product
    })
}))

