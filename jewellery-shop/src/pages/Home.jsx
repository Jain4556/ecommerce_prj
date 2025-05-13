import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import products from '../data/products'; // ✅ IMPORT PRODUCTS HERE

const Home = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-pink-700 drop-shadow-sm">Prem Jewellers</h1>
        <p className="text-lg text-gray-600 mt-2">
          Elegant and Exquisite Jewellery for Every Occasion
        </p>
        <Link
          to="/shop"
          className="mt-5 inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300"
        >
          Shop Now
        </Link>
      </div>

      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">✨ Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
