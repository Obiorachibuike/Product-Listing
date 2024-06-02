// components/ProductModal.js
export default function ProductModal({ product, onClose }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-4 rounded w-96">
          <button className="float-right" onClick={onClose}>X</button>
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
          <h2 className="font-bold text-lg">{product.title}</h2>
          <p className="text-gray-700">${product.price}</p>
          <p className="text-gray-700">{product.description}</p>
        </div>
      </div>
    );
  }
  