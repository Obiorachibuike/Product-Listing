import Image from 'next/image'
import React from 'react'

function modal({product}) {
  return (
      <div key={product.id} className='bg-grey-800 fixed top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50'> 
    <div className='bg-white p-8'>
                   <h3>
                    {product.name}
                   </h3>
                   <Image src={product.image}  alt={product.name} height={50} width={100}/>
                   <h3>
                    {product.description}
                   </h3>
                   <p>
                    {product.price}
                   </p>
                   <button> Close </button>
                </div>
    </div>
  )
}

export default modal