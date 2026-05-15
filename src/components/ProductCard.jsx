const ProductCard = ({
  product,
  isWishlisted,
  onAddToCart,
  onProductView,
  onToggleWishlist
}) => {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <span>{product.badge}</span>
        <button
          className={`wishlist-button ${isWishlisted ? "saved" : ""}`}
          type="button"
          onClick={() => onToggleWishlist(product.id)}
          aria-label={`${isWishlisted ? "Remove" : "Save"} ${product.name}`}
        >
          {isWishlisted ? "Saved" : "Save"}
        </button>
      </div>
      <div className="product-info">
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <div className="product-meta">
          <span>Rating {product.rating}</span>
          <span>{product.stock} left</span>
        </div>
        <div className="color-list">
          {product.colors.slice(0, 3).map((color) => (
            <span key={color}>{color}</span>
          ))}
        </div>
        <p className="description">{product.description}</p>
      </div>
      <div className="product-actions">
        <div className="price-stack">
          <strong>${product.price}</strong>
          <span>${product.originalPrice}</span>
          <small>{discount}% off</small>
        </div>
        <button type="button" className="secondary-button" onClick={() => onProductView(product)}>
          Quick View
        </button>
        <button type="button" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
