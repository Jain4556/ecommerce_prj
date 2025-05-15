import { useSearch } from "../context/SearchContext";
import ProductCard from "../components/ProductCard";
import products from "../data/products"; // Wherever your product list is

function Shop() {
  const { query } = useSearch();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && (
          <p className="col-span-full text-gray-500 text-center">
            No products found for "{query}"
          </p>
        )}
      </div>
    </div>
  );
}

export default Shop;
