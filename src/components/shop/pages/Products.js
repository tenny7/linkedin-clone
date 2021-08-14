import React from 'react'
import {useStore} from './../../../store/store'
import ProductComponent from './ProductComponent';

function Products() {
    const products = useStore(state => state.products)
  
    return(
        <div className="ui grid container" style={ {marginTop:'25px'}}>
            {/* <div className="ui row"> */}
                <ProductComponent/> 
            {/* </div> */}
        </div>
    )
}

export default Products
