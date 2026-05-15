const ProductModal = ({ product, isWishlisted, onAddToCart, onClose, onToggleWishlist }) => {
  if (!product) return null;

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal-close" type="button" onClick={onClose}>
          Close
        </button>
        <img src={product.image} alt={product.name} />
        <div className="modal-content">
          <p className="eyebrow">{product.category}</p>
          <h2 id="product-modal-title">{product.name}</h2>
          <p>{product.description}</p>
          <div className="product-meta">
            <span>Rating {product.rating}</span>
            <span>{product.stock} in stock</span>
          </div>
          <div className="color-list">
            {product.colors.map((color) => (
              <span key={color}>{color}</span>
            ))}
          </div>
          <div className="modal-actions">
            <strong>${product.price}</strong>
            <button
              type="button"
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
            >
              Add to Cart
            </button>
            <button type="button" onClick={() => onToggleWishlist(product.id)}>
              {isWishlisted ? "Saved" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
