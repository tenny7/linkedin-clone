import React from 'react'
import {useStore} from './../../../store/store';
import { Link } from 'react-router-dom'

const ProductComponent = () => {
    const products = useStore(state => state.products )

    const renderList = products.map( (product) => {
        const {id, title, price, category, image} = product
        return (    
            <div className="ui four wide column" key={id}>
                <Link to={`/product/${id}`}>
                <div className="ui link cards">
                    <div className="ui card">
                        <div className="ui image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
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
