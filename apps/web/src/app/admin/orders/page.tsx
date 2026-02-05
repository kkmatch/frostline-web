export default function AdminOrdersPage() {
  return (
    <section className="admin-section">
      <div className="admin-toolbar">
        <h2>Orders</h2>
        <button className="btn">Export</button>
      </div>
      <div className="admin-table card">
        <div className="admin-row admin-head">
          <span>Order</span>
          <span>Customer</span>
          <span>Total</span>
          <span>Age Check</span>
          <span>Status</span>
        </div>
        <div className="admin-row">
          <span>#1001</span>
          <span>J. Carter</span>
          <span>$69.17</span>
          <span>Verified</span>
          <span>Fulfillment</span>
        </div>
        <div className="admin-row">
          <span>#1002</span>
          <span>S. Patel</span>
          <span>$48.90</span>
          <span>Pending</span>
          <span>Hold</span>
        </div>
      </div>
    </section>
  );
}
