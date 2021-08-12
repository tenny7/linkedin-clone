import React from 'react'
import {useStore} from './../../../store/store';

const ProductComponent = () => {
    const products = useStore(state => state.products )

    // const renderList = products.map( (product) => {
    //     const {id, title, price, category, image} = product
    //     return (    
    //         <div className="four column wide" key={id}>
    //             <div className="ui link cards">
    //                 <div className="cards">
    //                     <div className="image">
    //                         <img src={image} alt={title}/>
    //                     </div>
    //                     <div className="content">
    //                         <div className="header">{title}</div>
    //                         <div className="meta price">{price}</div>
    //                         <div className="meta">{category}</div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // })
    return (
       <>
       {/* {renderList} */}
       </>
    )
}

export default ProductComponent
