import React, { useState } from 'react'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import ProductList, { sampleProducts } from './components/ProductList'


const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);
    
  // TODO: Implement state for cart management
  const [cart, setCart] = useState([]);

   // TODO: Implement state for category filtering
  const [category, setCategory] = useState("All");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts =
    category === "All"
    ? sampleProducts
    : sampleProducts.filter(
          (product) => product.category === category
        );

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* TODO: Implement category filter dropdown */}
      <label htmlFor="category">Filter by Category: </label>
      
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        >
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent">NonExistent</option>
      </select>

      <ProductList 
        products={filteredProducts}
        addToCart={addToCart}
        />

      {/* TODO: Implement and render Cart component */}
      <Cart cart={cart} />
    </div>
  )
}

export default App
