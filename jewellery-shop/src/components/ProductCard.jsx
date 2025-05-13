import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';

const ProductCard = ({ product, addToWishlist }) => {
  const [isInWishlist, setIsInWishlist] = useState(false);

  const handleWishlistClick = () => {
    if (!isInWishlist) {
      addToWishlist(product); // Add product to the wishlist
    } else {
      // Optionally, you can remove the product from wishlist here if needed
    }
    setIsInWishlist(!isInWishlist);
  };

  return (
    <div className="relative">
      {/* Heart icon */}
      <button
        className={`absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:text-pink-600 transition ${
          isInWishlist ? 'text-pink-600' : 'text-gray-500'
        }`}
        onClick={handleWishlistClick}
      >
        <FaHeart size={18} />
      </button>

      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-pink-700 font-bold mt-1">₹{product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
