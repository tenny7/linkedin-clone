import React from 'react'
import useStore from './../../../store/store'
import ProductComponent from './ProductComponent';

function Products() {
    const products = useStore(state => state.products)
    console.log(products)
    
    return(
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    )
}

export default Products
