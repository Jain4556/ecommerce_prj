import { Link, useNavigate } from "react-router-dom";
import GoldTextLogo from "./GoldTextLogo";
import { useSearch } from "../context/SearchContext";
import { useState } from "react";
import products from "../data/products";
function Navbar() {
  const { setQuery } = useSearch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setQuery(input);
      setSuggestions([]);
      navigate("/shop");
    }
  };

  const handleSuggestionClick = (productName) => {
    setInput(productName);
    setQuery(productName);
    setSuggestions([]);
    navigate("/shop");
  };
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        
        {/* Icons Top Row (Mobile only) */}
        <div className="flex justify-end mb-2 md:hidden space-x-4">
          <Link to="/shop">
            <lord-icon
              src="https://cdn.lordicon.com/slkvcfos.json"
              trigger="hover"
              colors="primary:#121331,secondary:#f472b6"
              style={{ width: "30px", height: "28px" }}
            ></lord-icon>
          </Link>
          <Link to="/wishlist">
            <lord-icon
              src="https://cdn.lordicon.com/xyboiuok.json" // Heart icon
              trigger="hover"
              colors="primary:#121331,secondary:#f472b6"
              style={{ width: "30px", height: "28px" }}
            ></lord-icon>
          </Link>
          <Link to="/cart">
            <lord-icon
              src="https://cdn.lordicon.com/medpcfcy.json"
              trigger="hover"
              colors="primary:#121331,secondary:#f472b6"
              style={{ width: "30px", height: "28px" }}
            ></lord-icon>
          </Link>
          <Link to="/login">
            <lord-icon
              src="https://cdn.lordicon.com/bhfjfgqz.json"
              trigger="hover"
              colors="primary:#121331,secondary:#f472b6"
              style={{ width: "30px", height: "28px" }}
            ></lord-icon>
          </Link>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto whitespace-nowrap">
          <Link to="/" className="flex items-center space-x-2">
            <GoldTextLogo />
          </Link>
        </div>

        {/*  */}
        {/* Search Bar */}
        {/* Search Bar */}
        <div className="mt-4 md:mt-0 flex-grow md:max-w-md w-full relative z-50">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleSearch}
              placeholder="Search for Gold, Diamond Jewellery..."
              className="w-full border border-gray-300 rounded-xl pl-10 pr-4 py-2 focus:outline-none"
            />
          </div>

          {/* 🔍 Suggestions Dropdown */}
          {suggestions.length > 0 && (
            <ul className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg mt-2 max-h-64 overflow-y-auto">
              {suggestions.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(product.name)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium">{product.name}</span>
                    <span className="text-sm text-gray-500">
                      ₹{product.price.toLocaleString()}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/*  */}

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-6 items-center ml-4">
          <Link to="/shop">
            <lord-icon
              src="https://cdn.lordicon.com/slkvcfos.json"
              trigger="hover"
              colors="primary:#121331,secondary:#f472b6"
              style={{ width: "30px", height: "28px" }}
            ></lord-icon>
          </Link>
          <Link to="/wishlist">
            <lord-icon
              src="https://cdn.lordicon.com/xyboiuok.json" // Heart icon
              trigger="hover"
              colors="primary:#121331,secondary:#f472b6"
              style={{ width: "30px", height: "28px" }}
            ></lord-icon>
          </Link>
          <Link to="/cart">
            <lord-icon
              src="https://cdn.lordicon.com/medpcfcy.json"
              trigger="hover"
              colors="primary:#121331,secondary:#f472b6"
              style={{ width: "30px", height: "28px" }}
            ></lord-icon>
          </Link>
          <Link to="/login">
            <lord-icon
              src="https://cdn.lordicon.com/bhfjfgqz.json"
              trigger="hover"
              colors="primary:#121331,secondary:#f472b6"
              style={{ width: "30px", height: "28px" }}
            ></lord-icon>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
