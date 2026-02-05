export default function SubscriptionsPage() {
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Subscriptions</h1>
          <p className="meta">Manage auto‑replenishment for your favorite devices.</p>
        </div>
      </section>

      <section className="container">
        <div className="grid-3">
          <div className="card">
            <h3>Frozen Lab Device 18000</h3>
            <p className="meta">Every 30 days • Next bill: Mar 5</p>
            <button className="btn secondary">Pause</button>
          </div>
          <div className="card">
            <h3>Nova Pro 18000</h3>
            <p className="meta">Every 14 days • Next bill: Feb 18</p>
            <button className="btn secondary">Pause</button>
          </div>
          <div className="card">
            <h3>Create New</h3>
            <p className="meta">Subscribe & save on recurring shipments.</p>
            <button className="btn">Start Subscription</button>
          </div>
        </div>
      </section>
    </main>
  );
}
