import ProductCard from '../components/ProductCard';

const allProducts = [
  { id: 1, name: 'Gold Necklace', price: 49999, image: '/images/gold-necklace.jpg' },
  { id: 2, name: 'Diamond Ring', price: 29999, image: '/images/diamond-ring.jpg' },
  { id: 3, name: 'Silver Bangles', price: 19999, image: '/images/silver-bangles.jpg' }
];

const Shop = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Shop All Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {allProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default Shop;