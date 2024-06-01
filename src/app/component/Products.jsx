/* eslint-disable react/prop-types */
import Image from 'next/image'
import React from 'react'
// import Delete from './Delete';

function Product() {
  // const displayPersons = searchTerm === ''
  // ? persons  // Display all persons if search term is empty
  // : persons.filter(person =>
  //     person.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );

  //   const deleteItem = (id) => {
  //     console.log(id);
    

  //     const deletedItem = displayPersons.filter((person) => person.id !== id);
  //     console.log(deletedItem);
  //  }
  return (
    <div>
  
 
                <div  className='bg-grey-200 p-4'> 
                   <Image src="/vercel.svg"  alt="vercel" height={50} width={100}/>
                   <h3>
                    Vercel
                   </h3>
                   <p>
                    $14
                   </p>
                </div>
 
    </div>
  )
}

export default Product