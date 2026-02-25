import React from "react";

export default function ProductCard({ name, price }) {
  return (
    <div style={styles.card}>
      <div style={styles.imagePlaceholder}>{name[0]}</div>
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.price}>${price}</p>
      <button style={styles.button}>Add to Cart</button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: 12,
    padding: 16,
    width: 180,
    textAlign: "center",
    backgroundColor: "#f1f4f4",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.2s",
    cursor: "pointer",
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    backgroundColor: "#e11010", // 🌟 nice green circle
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    margin: "0 auto 10px",
  },
  name: {
    fontSize: 18,
    color: "#333",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "#e91e63", // 🌟 pink color for price
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#2196F3", // 🌟 blue button
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: 8,
    cursor: "pointer",
  },
};