export default function AdminContentPage() {
  return (
    <section className="admin-section">
      <div className="admin-toolbar">
        <h2>Content</h2>
        <button className="btn">Add Banner</button>
      </div>
      <div className="grid-3">
        <div className="card">
          <h3>Homepage Banner</h3>
          <p className="meta">Active • Winter Drop</p>
        </div>
        <div className="card">
          <h3>Blog</h3>
          <p className="meta">4 published • 2 drafts</p>
        </div>
        <div className="card">
          <h3>Policies</h3>
          <p className="meta">Shipping, Warranty, Returns</p>
        </div>
      </div>
    </section>
  );
}
