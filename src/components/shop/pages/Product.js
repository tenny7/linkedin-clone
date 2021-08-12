import React from 'react'
import useStore from 'zustand'

function Product() {

    const products = useStore(state => state.products)
    return (
        <div>
            
        </div>
    )
}

export default Product
