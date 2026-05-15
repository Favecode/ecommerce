import ProductList from "../components/ProductList";

const Products = ({
  wishlist,
  onAddToCart,
  onProductView,
  onToggleWishlist
}) => {
  return (
    <main className="page-shell">
      <section className="page-heading">
        <p className="eyebrow">Products</p>
        <h1>Shop the full collection</h1>
        <p>Search, filter, save favorites, and add items to your cart.</p>
        <div className="page-stats" aria-label="Store stats">
          <span>6 curated items</span>
          <span>Top rated picks</span>
          <span>Fast delivery</span>
        </div>
      </section>
      <ProductList
        wishlist={wishlist}
        onAddToCart={onAddToCart}
        onProductView={onProductView}
        onToggleWishlist={onToggleWishlist}
      />
      <section className="wishlist-summary">
        <div>
          <p className="eyebrow">Wishlist</p>
          <h2>{wishlist.length} saved items</h2>
        </div>
        <p>
          Saved products stay on this device, so you can come back to them while
          browsing.
        </p>
      </section>
    </main>
  );
};

export default Products;
