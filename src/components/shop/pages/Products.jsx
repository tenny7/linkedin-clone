// @ts-nocheck
import React from 'react'
import ProductComponent from './ProductComponent';

function Products() {
  
    return(
        <div className="ui container">
            <h3>SHOP FOR</h3>
            <div className="ui grid" style={ {marginTop:'25px'}}>
                    <ProductComponent/> 
            </div>
        </div>
    )
}

export default Products
