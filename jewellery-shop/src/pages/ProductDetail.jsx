import { useParams } from 'react-router-dom';
import products from '../data/products'; // Your product list

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-4">Product not found.</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto flex flex-col items-center gap-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-72 h-72 object-cover rounded-lg shadow-md"
      />
      <h1 className="text-3xl font-bold text-pink-700">{product.name}</h1>
      <p className="text-gray-600 text-lg text-center max-w-xl">{product.description}</p>

      <div className="text-center mt-4">
        <p className="text-2xl text-pink-800 font-semibold mb-4">₹{product.price}</p>
        <button className="bg-pink-700 hover:bg-pink-800 text-white px-6 py-3 rounded-lg shadow-md">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
