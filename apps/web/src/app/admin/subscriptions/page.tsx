export default function AdminSubscriptionsPage() {
  return (
    <section className="admin-section">
      <div className="admin-toolbar">
        <h2>Subscriptions</h2>
        <button className="btn">Retry Failed</button>
      </div>
      <div className="admin-table card">
        <div className="admin-row admin-head">
          <span>Customer</span>
          <span>Product</span>
          <span>Interval</span>
          <span>Next Bill</span>
          <span>Status</span>
        </div>
        <div className="admin-row">
          <span>Jamie Carter</span>
          <span>Frozen Lab Device 18000</span>
          <span>30 days</span>
          <span>Mar 5</span>
          <span>Active</span>
        </div>
        <div className="admin-row">
          <span>Sam Patel</span>
          <span>Nova Pro 18000</span>
          <span>14 days</span>
          <span>Feb 18</span>
          <span>Failed</span>
        </div>
      </div>
    </section>
  );
}
