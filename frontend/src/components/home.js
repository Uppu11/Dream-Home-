import React from "react";

const products = [
  { id: 1, name: "Product 1", price: 20 },
  { id: 2, name: "Product 2", price: 30 },
  { id: 3, name: "Product 3", price: 40 },
  // Add more products as needed
];

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: "center" }}>Product List</h1>
      <ul style={styles.productList}>
        {products.map((product) => (
          <li key={product.id} style={styles.productItem}>
            <div>{product.name}</div>
            <div>${product.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  productList: {
    listStyle: "none",
    padding: 0,
  },
  productItem: {
    border: "1px solid #ddd",
    borderRadius: "5px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
  },
};

export default Home;
