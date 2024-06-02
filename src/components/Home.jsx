'use client'
import "tailwindcss/tailwind.css";
import { useState, useCallback, useEffect } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import ProductModal from '../components/ProductModal.jsx';
import SearchBar from '../components/search.jsx';
import product from "../app/utils/getData.js"
import data from '../app/Data/data.js'

export default function Home() {
    console.log(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchData();
      setProducts(products);
    };
    getProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductClick = useCallback((product) => {
    setSelectedProduct(product);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedProduct(null);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
}


    