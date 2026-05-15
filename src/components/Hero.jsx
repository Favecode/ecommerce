const Hero = ({ onShopClick }) => {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="eyebrow">Premium shopping experience</p>
        <h1>Upgrade your everyday essentials.</h1>
        <p>
          Curated products, smooth checkout, fast support, and a store design
          that feels trustworthy from the first click.
        </p>
        <div className="hero-actions">
          <button type="button" onClick={onShopClick}>Shop Collection</button>
          <span>Trusted by 12k+ happy shoppers</span>
        </div>
      </div>
      <div className="hero-panel">
        <span>Client favorite</span>
        <strong>30% off launch picks</strong>
        <p>Style, tech, travel, and home products with fresh weekly deals.</p>
        <div className="hero-mini-grid">
          <small>Free delivery</small>
          <small>Secure checkout</small>
        </div>
      </div>
    </section>
  );
};

export default Hero;
