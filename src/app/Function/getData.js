export const  getStaticProps = async () => {
    const response = await axios.get("fakestoreapi.com/")
   data = response.json()
            return {
                props: [
                    products : data.products
                ]
            }
    // return response.data
}