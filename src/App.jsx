import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import ProductModal from "./components/ProductModal";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("shopx-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("shopx-wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toast, setToast] = useState("");

  const cartCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems]
  );

  useEffect(() => {
    localStorage.setItem("shopx-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("shopx-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (!toast) return undefined;

    const timeoutId = setTimeout(() => setToast(""), 2200);
    return () => clearTimeout(timeoutId);
  }, [toast]);

  const addToCart = (product) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...items, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
    setToast(`${product.name} added to cart`);
  };

  const toggleWishlist = (productId) => {
    setWishlist((items) =>
      items.includes(productId)
        ? items.filter((itemId) => itemId !== productId)
        : [...items, productId]
    );
  };

  const updateQuantity = (productId, change) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((items) => items.filter((item) => item.id !== productId));
  };

  const productPageProps = {
    wishlist,
    onAddToCart: addToCart,
    onProductView: setSelectedProduct,
    onToggleWishlist: toggleWishlist
  };

  return (
    <>
      <Navbar
        activePage={activePage}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        onNavigate={setActivePage}
      />
      {activePage === "home" && (
        <Home onNavigate={setActivePage} wishlistCount={wishlist.length} />
      )}
      {activePage === "products" && <Products {...productPageProps} />}
      {activePage === "contact" && <Contact />}
      <Cart
        isOpen={isCartOpen}
        items={cartItems}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
      <ProductModal
        product={selectedProduct}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onAddToCart={addToCart}
        onClose={() => setSelectedProduct(null)}
        onToggleWishlist={toggleWishlist}
      />
      {toast && <div className="toast">{toast}</div>}
      <Footer />
    </>
  );
}

export default App;
