import Hero from "../components/Hero";

const Home = ({ onNavigate, wishlistCount }) => {
  return (
    <>
      <Hero onShopClick={() => onNavigate("products")} />
      <section className="store-highlights" aria-label="Store highlights">
        <div>
          <span className="highlight-icon">01</span>
          <strong>Free shipping</strong>
          <span>On orders over $100</span>
        </div>
        <div>
          <span className="highlight-icon">02</span>
          <strong>Secure checkout</strong>
          <span>Protected card payments</span>
        </div>
        <div>
          <span className="highlight-icon">03</span>
          <strong>Fast support</strong>
          <span>Help when you need it</span>
        </div>
      </section>
      <section className="category-showcase">
        <article>
          <span>Footwear</span>
          <strong>Street-ready styles</strong>
        </article>
        <article>
          <span>Tech</span>
          <strong>Smarter daily gear</strong>
        </article>
        <article>
          <span>Home</span>
          <strong>Comfort-focused finds</strong>
        </article>
      </section>
      <section className="home-feature">
        <div>
          <p className="eyebrow">Built for better shopping</p>
          <h2>Explore deals, save favorites, and checkout faster.</h2>
          <p>
            Your wishlist has {wishlistCount} saved items. Visit products to
            keep browsing the collection.
          </p>
        </div>
        <button type="button" onClick={() => onNavigate("products")}>
          View Products
        </button>
      </section>
      <section className="promo-section">
        <div>
          <p className="eyebrow">Weekend deal</p>
          <h2>Save 20% on selected everyday essentials.</h2>
          <p>
            Refresh your setup with customer favorites across tech, fashion,
            travel, and home.
          </p>
        </div>
        <button type="button" onClick={() => onNavigate("products")}>
          Browse deals
        </button>
      </section>
    </>
  );
};

export default Home;
