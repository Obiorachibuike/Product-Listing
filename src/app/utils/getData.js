// export async function getStaticProps() {
//     const res = await fetch('https://fakestoreapi.com/products');
//     const products = await res.json();
//     return {
//       props: {
//         products,
//       },
//     };
//   }

  const fetchData = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const products = await res.json();
    console.log(products);
    return products
  }