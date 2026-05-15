const Cart = ({
  isOpen,
  items,
  onClose,
  onUpdateQuantity,
  onRemoveItem
}) => {
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 || subtotal === 0 ? 0 : 12;
  const total = subtotal + shipping;

  return (
    <aside className={`cart-drawer ${isOpen ? "open" : ""}`} aria-hidden={!isOpen}>
      <div className="cart-header">
        <div>
          <p className="eyebrow">Your cart</p>
          <h2>{items.length ? `${items.length} items` : "Cart is empty"}</h2>
        </div>
        <button type="button" onClick={onClose} aria-label="Close cart">
          Close
        </button>
      </div>

      <div className="cart-items">
        {items.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <div className="quantity-controls">
                <button type="button" onClick={() => onUpdateQuantity(item.id, -1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => onUpdateQuantity(item.id, 1)}>
                  +
                </button>
              </div>
            </div>
            <button
              className="remove-button"
              type="button"
              onClick={() => onRemoveItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))}

        {items.length === 0 && (
          <p className="empty-state">Add a product to start building your order.</p>
        )}
      </div>

      <div className="cart-summary">
        <div>
          <span>Subtotal</span>
          <strong>${subtotal.toFixed(2)}</strong>
        </div>
        <div>
          <span>Shipping</span>
          <strong>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</strong>
        </div>
        <div className="total-row">
          <span>Total</span>
          <strong>${total.toFixed(2)}</strong>
        </div>
        <button type="button" disabled={items.length === 0}>
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default Cart;
