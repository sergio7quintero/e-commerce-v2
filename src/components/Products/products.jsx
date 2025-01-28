import React, { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import "./products.css";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [setPrice, setPriceList] = useState(product);

  // Add state for button interactions
  const [hoveredItem, setHoveredItem] = useState(null);
  const [clickedItem, setClickedItem] = useState(null);

  const handleBtns = (e) => {
    let word = e.target.value;

    if (word === "All") {
      setCategory(product);
    } else if (word === "Jordan 1 High") {
      const filtered = product.filter(
        (item) => item.Description === "Jordan 1 High"
      );
      setCategory(filtered);
    } else if (word === "Dunk") {
      const filtered = product.filter(
        (item) => item.Description === "Nike SB Dunk Low"
      );
      setCategory(filtered);
    } else if (word === "Adidas") {
      const filtered = product.filter(
        (item) => item.Description === "Adidas Samba"
      );
      setCategory(filtered);
    } else if (word === "Jordan 1 Low") {
      const filtered = product.filter(
        (item) => item.Description === "Jordan 1 Low"
      );
      setCategory(filtered);
    }
  };

  const setLowtoHigh = () => {
    const sortedProducts = product.sort((a, b) => a.Price - b.Price);
    setPriceList([...sortedProducts]);
  };

  const setHighToLow = () => {
    const reverseSortedProducts = product.sort((a, b) => b.Price - a.Price);
    setPriceList([...reverseSortedProducts]);
  };

  const handleAddToBag = (itemId) => {
    setClickedItem(itemId);
    setTimeout(() => setClickedItem(null), 1000);
    // Add your cart functionality here
  };

  useEffect(() => {
    products();
  }, []);

  const products = async () => {
    const list = await fetch("http://localhost:9000/API/getproducts");
    const items = await list.json();
    setProduct(items);
    setCategory(items);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className="product-header">SHOP ALL PRODUCTS</h2>

        <div id="filter-buttons">
          <div className="dropdown">
            <button className="dropbtn">Filter by: </button>
            <div className="dropdown-content">
              <button value="All" onClick={handleBtns}>
                All
              </button>
              <button value="Jordan 1 High" onClick={handleBtns}>
                Jordan 1 High
              </button>
              <button value="Dunk" onClick={handleBtns}>
                Nike SB Dunk Low
              </button>
              <button value="Jordan 1 Low" onClick={handleBtns}>
                Jordan 1 Low
              </button>
              <button value="Adidas" onClick={handleBtns}>
                Adidas
              </button>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">Sort by: </button>
            <div className="dropdown-content">
              <button onClick={setLowtoHigh}>Price: Low to High</button>
              <button onClick={setHighToLow}>Price: High to Low</button>
            </div>
          </div>
        </div>

        {/* ... (keep the beginning of your component the same) ... */}

        <div id="shoe-container">
          {category.length > 0 ? (
            category.map((item, index) => (
              <div id="cardImg" key={index}>
                <div className="shoeImages">
                  <img src={item.Image} alt={item.Name} className="pictures" />
                </div>
                <div className="product-details">
                  <h3 className="product-name">{item.Name}</h3>
                  <p className="product-description">{item.Description}</p>
                  <p className="shoe-cost">{item.Price}</p>
                </div>
                <div className="addCart">
                  <button
                    className={`add-to-bag-button ${
                      clickedItem === index ? "clicked" : ""
                    } ${hoveredItem === index ? "hovered" : ""}`}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => handleAddToBag(index)}
                  >
                    <ShoppingBag
                      size={20}
                      className={`bag-icon ${
                        hoveredItem === index ? "hover-icon" : ""
                      }`}
                    />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>

        {/* ... (keep the rest of your component the same) ... */}
      </div>
    </>
  );
}
