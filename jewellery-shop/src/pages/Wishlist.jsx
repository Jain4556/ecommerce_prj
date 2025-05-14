import React from "react";
import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-gray-600">
          Your wishlist is empty. <Link to="/shop" className="text-pink-500 underline">Start shopping!</Link>
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="mt-2 text-lg font-bold">{item.name}</h2>
              <p className="text-gray-600">{item.category}</p>
              <p className="text-pink-600 font-semibold mt-1">₹{item.price}</p>

              <div className="mt-4 flex space-x-2">
                <Link
                  to={`/product/${item.id}`}
                  className="bg-pink-500 text-white px-4 py-1 rounded hover:bg-pink-600 text-sm"
                >
                  View Details
                </Link>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="bg-gray-200 px-4 py-1 rounded text-sm hover:bg-gray-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
