export default function AdminDashboard() {
  return (
    <section className="admin-grid">
      <div className="card">
        <h3>Today’s Orders</h3>
        <p className="meta">42 orders • $3,240</p>
      </div>
      <div className="card">
        <h3>Pending Age Checks</h3>
        <p className="meta">3 orders awaiting verification</p>
      </div>
      <div className="card">
        <h3>Inventory Alerts</h3>
        <p className="meta">5 SKUs below threshold</p>
      </div>
      <div className="card">
        <h3>Subscriptions</h3>
        <p className="meta">128 active • 9 failed this week</p>
      </div>
    </section>
  );
}
