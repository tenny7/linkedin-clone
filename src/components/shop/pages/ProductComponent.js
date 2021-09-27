import React from 'react'
import {useStore} from './../../../store/store';
import { Link } from 'react-router-dom'
import './../../../css/Product.css'

const ProductComponent = () => {
    // @ts-ignore
    const products = useStore(state => state.products )

    const renderList = products.map( (product) => {
        const {id, title, price, category, image} = product
        return (  
         
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                <div className="ui link cards">
                    <div className="card ">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                            <div>
                                <button className="ui animated button">
                                    <div className="visible content">Next</div>
                                    <div className="hidden content">
                                        <i aria-hidden="true" className="arrow right icon"></i>
                                    </div>
                                </button>
                                <button className="ui vertical animated button">
                                    <div className="hidden content">Shop</div>
                                    <div className="visible content">
                                        <i aria-hidden="true" className="shop icon"></i>
                                    </div>
                                </button>
                                <button className="ui fade animated button">
                                    <div className="visible content">See More</div>
                                    <div className="hidden content">$ {price}</div>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </Link>
               
            </div>
        );
    })
    
    return (
        <>
           {renderList}
        </>
    )
}

export default ProductComponent
