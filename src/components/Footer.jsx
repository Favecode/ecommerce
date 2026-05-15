const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <section className="footer-cta">
        <div>
          <p className="eyebrow">Stay in the loop</p>
          <h2>Get new drops, private deals, and shopping tips.</h2>
        </div>
        <form className="footer-newsletter">
          <input type="email" placeholder="Email address" aria-label="Email address" />
          <button type="submit">Subscribe</button>
        </form>
      </section>

      <section className="footer-main">
        <div className="footer-brand">
          <h2>ShopX</h2>
          <p>
            Quality goods, fair prices, and a client-ready shopping experience
            built for confident everyday buying.
          </p>
          <div className="footer-socials" aria-label="Social links">
            <a href="#footer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="5" />
                <circle cx="12" cy="12" r="3.5" />
                <circle cx="17" cy="7" r="1" />
              </svg>
            </a>
            <a href="#footer" aria-label="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v5h4v-5h3l1-4h-4V9c0-.6.4-1 1-1Z" />
              </svg>
            </a>
            <a href="#footer" aria-label="X">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 5h4.4l3.1 4.3L16.2 5H20l-5.6 6.4L20 19h-4.4l-3.4-4.7L8.1 19H4.3l6-6.9L5 5Z" />
              </svg>
            </a>
            <a href="#footer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 12s0-3.3-.4-4.8c-.2-.8-.8-1.4-1.6-1.6C17.5 5.2 12 5.2 12 5.2s-5.5 0-7 .4c-.8.2-1.4.8-1.6 1.6C3 8.7 3 12 3 12s0 3.3.4 4.8c.2.8.8 1.4 1.6 1.6 1.5.4 7 .4 7 .4s5.5 0 7-.4c.8-.2 1.4-.8 1.6-1.6.4-1.5.4-4.8.4-4.8Z" />
                <path d="m10 9 5 3-5 3V9Z" className="footer-icon-cutout" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
          <div>
            <strong>Shop</strong>
            <a href="#footer">New arrivals</a>
            <a href="#footer">Best sellers</a>
            <a href="#footer">Weekend deals</a>
            <a href="#footer">Gift cards</a>
          </div>
          <div>
            <strong>Support</strong>
            <a href="mailto:support@shopx.test">Email support</a>
            <a href="#footer">Shipping info</a>
            <a href="#footer">Returns</a>
            <a href="#footer">Order tracking</a>
          </div>
          <div>
            <strong>Company</strong>
            <a href="#footer">About ShopX</a>
            <a href="#footer">Careers</a>
            <a href="#footer">Wholesale</a>
            <a href="#footer">Privacy policy</a>
          </div>
        </nav>
      </section>

      <section className="footer-perks" aria-label="Store benefits">
        <span>Free shipping over $100</span>
        <span>Secure checkout</span>
        <span>14-day returns</span>
        <span>Visa</span>
        <span>Mastercard</span>
        <span>PayPal</span>
      </section>

      <section className="footer-bottom">
       
        <div>
          <a href="#footer">Terms</a>
          <a href="#footer">Privacy</a>
          <a href="#footer">Cookies</a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
