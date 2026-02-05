export default function AdminCustomersPage() {
  return (
    <section className="admin-section">
      <div className="admin-toolbar">
        <h2>Customers</h2>
        <button className="btn">Add Note</button>
      </div>
      <div className="admin-table card">
        <div className="admin-row admin-head">
          <span>Name</span>
          <span>Email</span>
          <span>Orders</span>
          <span>Points</span>
          <span>Status</span>
        </div>
        <div className="admin-row">
          <span>Jamie Carter</span>
          <span>jamie@example.com</span>
          <span>12</span>
          <span>1,240</span>
          <span>Active</span>
        </div>
        <div className="admin-row">
          <span>Sam Patel</span>
          <span>sam@example.com</span>
          <span>3</span>
          <span>320</span>
          <span>Active</span>
        </div>
      </div>
    </section>
  );
}
