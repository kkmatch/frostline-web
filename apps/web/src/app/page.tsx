import { products } from "./_data/products";

export default function HomePage() {
  const heroProduct = products[1] ?? products[0];
  const featured = [heroProduct, ...products.filter((item) => item.id !== heroProduct.id).slice(0, 2)];

  return (
    <main className="home-main">
      <section className="hero container fade-in">
        <div className="hero-grid young">
          <div className="hero-copy">
            <span className="eyebrow">US / CA compliant • 21+</span>
            <h1>
              Neon‑clean drops.
              <br />
              Fast flavor. Fast restock.
            </h1>
            <p>
              Designed for quick hits and smooth subscription refills. Verified checkout and adult
              signature delivery built in.
            </p>
            <div className="hero-actions">
              <a className="btn glow" href="/catalog">
                Shop Bestsellers — Free Shipping $80+
              </a>
              <a className="btn ghost" href="/account/subscriptions">
                Build a Subscription — Save 10%
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>20</strong>
                <span>SKUs live</span>
              </div>
              <div>
                <strong>10</strong>
                <span>flavors</span>
              </div>
              <div>
                <strong>24h</strong>
                <span>ship out</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-card">
              <span className="pill">Drop of the Week</span>
              <img className="hero-image" src={heroProduct.image} alt={heroProduct.name} />
              <div className="hero-card-meta">
                <h3>{heroProduct.name}</h3>
                <p className="meta">
                  {heroProduct.flavor} • {heroProduct.nicotine} • ${heroProduct.price.toFixed(2)}
                </p>
              </div>
              <span className="sticker">{heroProduct.badge}</span>
              <span className="sticker alt">Save 10%</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Trending Now</h2>
          <p className="meta">Most‑loved picks across Mint, Citrus, and Berry.</p>
        </div>
        <div className="grid-3 stagger">
          {featured.map((item) => (
            <div key={item.name} className="card product">
              <span className="pill">{item.badge}</span>
              <img className="product-image" src={item.image} alt={item.name} />
              <h3>
                <a href={`/product/${item.slug}`}>{item.name}</a>
              </h3>
              <p className="meta">
                {item.flavor} • {item.nicotine} • ${item.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section container flavor-zone">
        <div className="section-head">
          <h2>Flavor Lab</h2>
          <p className="meta">Pick your lane — icy, fruity, or neon‑sweet.</p>
        </div>
        <div className="flavor-grid">
          <div className="flavor">Arctic Mint</div>
          <div className="flavor">Citrus Ice</div>
          <div className="flavor">Peach Freeze</div>
          <div className="flavor">Blue Razz</div>
          <div className="flavor">Grape Chill</div>
          <div className="flavor">Watermelon Wave</div>
          <div className="flavor">Strawberry Ice</div>
          <div className="flavor">Pineapple Rush</div>
          <div className="flavor">Cola Frost</div>
          <div className="flavor">Mango Aurora</div>
        </div>
      </section>

      <section className="section container">
        <div className="grid-3">
          <div className="card">
            <h3>Age Verification</h3>
            <p className="meta">21+ only. Verified at checkout and recorded for compliance.</p>
          </div>
          <div className="card">
            <h3>Adult Signature Delivery</h3>
            <p className="meta">All shipments require adult signature and ID check on delivery.</p>
          </div>
          <div className="card">
            <h3>Rewards + Referrals</h3>
            <p className="meta">Earn points on every order and share rewards with friends.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>Compliance-first storefront scaffold. Replace placeholder content with your brand.</p>
        </div>
      </footer>
    </main>
  );
}
