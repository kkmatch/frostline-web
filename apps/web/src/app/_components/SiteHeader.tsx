import Link from "next/link";
import NavLink from "./NavLink";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="logo" href="/">
          Frostline Co.
        </Link>
        <nav className="nav">
          <NavLink href="/catalog" label="Catalog" />
          <NavLink href="/account/rewards" label="Rewards" />
          <NavLink href="/account/referrals" label="Referrals" />
          <NavLink href="/account/subscriptions" label="Subscriptions" />
          <Link href="/cart" className="nav-cta">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}
