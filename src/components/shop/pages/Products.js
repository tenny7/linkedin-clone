import React from 'react'
import useStore from './../../../store/store'

function Products() {
    const products = useStore(state => state.products)
    console.log(products)
    
    return(
        <div>
            
        </div>
    )
}

export default Products
