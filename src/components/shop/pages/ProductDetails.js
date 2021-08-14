import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { useStore } from '../../../store/store'

const Product = () => {
    const { productId } = useParams()
    // console.log(productId)
    const selectedProduct = useStore(state => state.selectedProduct)
    const setSelectedProduct = useStore(state => state.setSelectedProduct)

    const fetchProductDetails = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then((res) => {
                console.log(res.data)
                setSelectedProduct(res)
            })
            .then(err=>console.log(err))
    }   
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails() 
            // clear selected product object 
    },[productId])
    return (
        <div>
            <h1>Product Details</h1>
        </div>
    )
}

export default Product
