// @ts-nocheck
import React from 'react'
import {useStore} from './../../../store/store'
import ProductComponent from './ProductComponent';

function Products() {
    const products = useStore(state => state.products)
  
    return(
        <div className="ui container">
            <h3>SHOP FOR</h3>
            <div className="ui grid" style={ {marginTop:'25px'}}>
                {/* <div className="ui row"> */}
                    <ProductComponent/> 
                {/* </div> */}
            </div>
        </div>
    )
}

export default Products
