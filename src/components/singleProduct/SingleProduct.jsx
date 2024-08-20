import React from 'react'
import ProductDetails from './ProductDetails'
import AdditionalData from './AdditionalData'
import { ToastContainer } from 'react-toastify';

const SingleProduct = ({ product }) => {
  const data = product.description
  return (
    <div key={product.id}>
      <ProductDetails product={product}/>
      <AdditionalData data={data}/>
      <ToastContainer />
    </div>
  )
}

export default SingleProduct
