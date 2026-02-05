export default function AdminProductsPage() {
  return (
    <section className="admin-section">
      <div className="admin-toolbar">
        <h2>Products</h2>
        <button className="btn">Add Product</button>
      </div>
      <div className="admin-table card">
        <div className="admin-row admin-head">
          <span>SKU</span>
          <span>Name</span>
          <span>Brand</span>
          <span>Stock</span>
          <span>Status</span>
        </div>
        <div className="admin-row">
          <span>FL-18000-MNT</span>
          <span>Frozen Lab Device 18000</span>
          <span>Frozen Lab</span>
          <span>120</span>
          <span>Active</span>
        </div>
        <div className="admin-row">
          <span>NV-18000-BBI</span>
          <span>Nova Pro 18000</span>
          <span>Nova</span>
          <span>40</span>
          <span>Low</span>
        </div>
      </div>
    </section>
  );
}
