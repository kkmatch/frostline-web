import FormNotice from "./FormNotice";

export default function CheckoutPage() {
  return (
    <main className="page">
      <section className="container">
        <h1>Checkout</h1>
        <div className="checkout-grid">
          <div className="card">
            <h3>Shipping</h3>
            <div className="form-grid">
              <input placeholder="Full name" />
              <input placeholder="Phone" />
              <input placeholder="Address line 1" />
              <input placeholder="City" />
              <input placeholder="State" />
              <input placeholder="Postal code" />
            </div>
            <FormNotice type="error" message="Please complete all required shipping fields." />
            <h3>Age Verification</h3>
            <p className="meta">Required for all orders. Verification will be recorded.</p>
            <button className="btn secondary">Verify Age</button>
            <FormNotice type="hint" message="Age verification must succeed before payment." />
          </div>

          <aside className="card summary">
            <h3>Payment</h3>
            <div className="form-grid">
              <input placeholder="Card number" />
              <input placeholder="MM/YY" />
              <input placeholder="CVC" />
              <input placeholder="Name on card" />
            </div>
            <FormNotice type="error" message="Payment details are incomplete." />
            <div className="summary-row">
              <span>Adult signature + ID check</span>
              <span>Required</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>$69.17</span>
            </div>
            <button className="btn">Place Order</button>
          </aside>
        </div>
      </section>
    </main>
  );
}
