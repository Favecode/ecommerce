const Contact = () => {
  return (
    <main className="page-shell">
      <section className="contact-hero">
        <div>
          <p className="eyebrow">Contact ShopX</p>
          <h1>Talk to a real support team.</h1>
          <p>
            Questions about products, delivery, returns, or a custom order?
            Send a message and we will get back to you quickly.
          </p>
        </div>
        <aside className="contact-hero-card">
          <span>Average response</span>
          <strong>Under 24 hours</strong>
          <p>Monday to Friday, 9am to 6pm.</p>
        </aside>
      </section>

      <section className="contact-grid">
        <article>
          <span className="contact-label">Support</span>
          <strong>Email support</strong>
          <a href="mailto:support@shopx.test">support@shopx.test</a>
          <span>Replies within one business day</span>
        </article>
        <article>
          <span className="contact-label">Hours</span>
          <strong>Opening hours</strong>
          <span>Monday to Friday</span>
          <span>9am to 6pm</span>
        </article>
        <article>
          <span className="contact-label">Orders</span>
          <strong>Returns</strong>
          <span>Simple 14-day returns</span>
          <span>Order number required</span>
        </article>
      </section>

      <section className="contact-section">
        <div className="contact-panel">
          <p className="eyebrow">Send a message</p>
          <h2>How can we help today?</h2>
          <p>
            Fill out the form and include as much detail as possible so our team
            can help faster.
          </p>
          <div className="contact-promise">
            <span>Secure details</span>
            <span>Friendly support</span>
            <span>Clear next steps</span>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <label>
              Full name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email address
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
          </div>

          <div className="form-row">
            <label>
              Topic
              <select name="topic" defaultValue="order">
                <option value="order">Order support</option>
                <option value="delivery">Delivery question</option>
                <option value="returns">Returns and refunds</option>
                <option value="product">Product advice</option>
              </select>
            </label>
            <label>
              Order number
              <input type="text" name="order" placeholder="Optional" />
            </label>
          </div>

          <label>
            Message
            <textarea
              name="message"
              placeholder="Tell us what you need help with"
              rows="6"
              required
            />
          </label>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="newsletter-section">
        <div>
          <p className="eyebrow">ShopX updates</p>
          <h2>Get new arrivals and offers first.</h2>
        </div>
        <form>
          <input type="email" placeholder="Email address" aria-label="Email address" />
          <button type="submit">Join</button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
