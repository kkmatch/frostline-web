import type { ReactNode } from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <Link className="logo" href="/admin">
          Frostline Admin
        </Link>
        <nav className="admin-nav">
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/products">Products</Link>
          <Link href="/admin/orders">Orders</Link>
          <Link href="/admin/customers">Customers</Link>
          <Link href="/admin/rewards">Rewards</Link>
          <Link href="/admin/subscriptions">Subscriptions</Link>
          <Link href="/admin/content">Content</Link>
        </nav>
      </aside>
      <div className="admin-main">
        <header className="admin-header">
          <div>
            <h1>Admin Console</h1>
            <p className="meta">Manage catalog, orders, compliance, and rewards.</p>
          </div>
          <button className="btn secondary">Admin User</button>
        </header>
        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
}
