// components/ProductCard.js
export default function ProductCard({ product, onClick }) {
    return (
      <div className="border p-4 rounded" onClick={onClick}>
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
        <h2 className="font-bold text-lg">{product.title}</h2>
        <p className="text-gray-700">${product.price}</p>
      </div>
    );
  }
  