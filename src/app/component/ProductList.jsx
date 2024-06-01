"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Filter from './Filter'
// import Product from './Products'

function ProductList({products}) {
  // console.log(products);
    const [searchTerm, setsearchTerm] = useState('')
    const [items, setitems] = useState([])
    // const [selectedProduct, setselectedProduct]?
// setitems(products)
window.onload = () => {
  setitems(products)
  console.log(items);
}
window.addEventListener("load", () => {
  
  setitems(products)
  console.log(items);
})
   console.log(items);
   const handleSearch = (event) => {
     setSearchTerm(event.target.value);
     const filteredProducts = products.filter(product => {
       product.name.toLowerCase().includes(searchTerm.toLowerCase())
       console.log(items);
     })
     setitems(filteredProducts)
    };



  return (
    <div className='grid grid-cols-3 gap-4'>
      {/* <Filter searchTerm={searchTerm} handleSearch={handleSearch}/> */}
        {
            items.map(product => (
                <div key={product.id} className='bg-grey-200 p-4 item'> 
                <div className="image-cont">

                   <Image src={product.image}  alt={product.name} height={50} width={250} className='image' />
                </div>
                   <h3>
                    {product.name}
                   </h3>
                   <div className="bottom-cont">
                    <button className='button'>Detaills</button>
                   <p>
                    {product.price}
                   </p>
                   </div>
                </div>
            ))}
             {/* <Product  /> */}
        
    </div>
  )
}

export default ProductList