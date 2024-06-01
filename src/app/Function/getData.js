export const getStaticProps = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    const data = response.data;
  
    return {
      props: {
        products: data
      }
    };
  };