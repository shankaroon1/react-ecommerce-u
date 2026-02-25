import React from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}> Products</h2>
      <div style={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: 20,
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f2f5",
    minHeight: "100vh",
  },
  heading: {
    color: "#333",
    marginBottom: 20,
  },
  grid: {
    display: "flex",
    gap: 20,
    flexWrap: "wrap",
  },
};