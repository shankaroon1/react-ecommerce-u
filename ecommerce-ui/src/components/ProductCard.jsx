import React from "react";

const ProductCard = ({ product }) => {
  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <span style={styles.discountBadge}>-{product.discount}%</span>
      </div>

      <div style={styles.details}>
        <h4 style={styles.name}>{product.name}</h4>

        <div style={styles.rating}>
          ⭐ {product.rating}
        </div>

        <div style={styles.priceSection}>
          <span style={styles.oldPrice}>${product.price}</span>
          <span style={styles.newPrice}>${discountedPrice.toFixed(2)}</span>
        </div>

        <button style={styles.button}>Add to Cart</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "0.3s",
  },
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: "250px",
    objectFit: "cover",
  },
  discountBadge: {
    position: "absolute",
    top: "10px",
    left: "10px",
    backgroundColor: "red",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "12px",
  },
  details: {
    padding: "15px",
  },
  name: {
    fontSize: "16px",
    marginBottom: "5px",
  },
  rating: {
    color: "#f39c12",
    marginBottom: "8px",
  },
  priceSection: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    marginBottom: "10px",
  },
  oldPrice: {
    textDecoration: "line-through",
    color: "gray",
  },
  newPrice: {
    color: "red",
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    padding: "8px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ProductCard