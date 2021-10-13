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
    }),
    currentUser: null,
    setCurrentUser: (user) => set({
        currentUser: user
    }),
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    },
    setFormData: (formData) => set({
        initialState: formData,
    })

}))

