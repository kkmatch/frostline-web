"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { products } from "../../_data/products";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const [frequency, setFrequency] = useState("30");
  const [qty, setQty] = useState(1);
  const router = useRouter();
  const product = products.find((item) => item.slug === params.slug);
  const exists = Boolean(product);
  const safeProduct = product ?? products[0];
  const flavors = ["Arctic Mint", "Citrus Ice", "Grape Chill", "Mango Aurora"];
  const handleFlavor = (flavor: string) => {
    const match = products.find((item) => item.flavor.toLowerCase() == flavor.toLowerCase());
    if (match) router.push(`/product/${match.slug}`);
  };

  return (
    <main className="page">
      {!exists && (
        <section className="container not-found">
          <div className="card">
            <h2>Product not found</h2>
            <p className="meta">We could not locate that SKU. Showing a featured product instead.</p>
          </div>
        </section>
      )}
      <section className="container product-detail">
        <div className="card product-media">
          <img className="product-hero-image" src={safeProduct.image} alt={safeProduct.name} />
          <div className="thumb-row">
            <img className="thumb" src={safeProduct.image} alt={safeProduct.name} />
            <img className="thumb" src={products[1].image} alt={products[1].name} />
            <img className="thumb" src={products[2].image} alt={products[2].name} />
          </div>
        </div>

        <div className="product-info">
          <p className="meta">{safeProduct.brand} • Disposable</p>
          <h1>{safeProduct.name}</h1>
          <p className="meta">{safeProduct.nicotine} nic • 10 flavor options • ${safeProduct.price.toFixed(2)}</p>

          <div className="option-block">
            <p className="label">Flavor</p>
            <div className="chips">
              {flavors.map((flavor) => (
                <button key={flavor} className="chip" onClick={() => handleFlavor(flavor)}>
                  {flavor}
                </button>
              ))}
            </div>
          </div>

          <div className="option-block">
            <p className="label">Nicotine</p>
            <div className="chips">
              <button className="chip">5%</button>
              <button className="chip">3%</button>
              <button className="chip">0%</button>
            </div>
          </div>

          <div className="product-actions">
            <button className="btn">Add to Cart</button>
            <button className="btn secondary">Subscribe & Save</button>
          </div>

          <div className="option-block">
            <p className="label">Quantity</p>
            <div className="qty-row">
              <button className="chip" onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
              <span className="qty-value">{qty}</span>
              <button className="chip" onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>

          <div className="option-block">
            <p className="label">Subscription Frequency</p>
            <div className="chips">
              <button
                className={frequency === "14" ? "chip chip-active" : "chip"}
                onClick={() => setFrequency("14")}
              >
                Every 14 days
              </button>
              <button
                className={frequency === "30" ? "chip chip-active" : "chip"}
                onClick={() => setFrequency("30")}
              >
                Every 30 days
              </button>
              <button
                className={frequency === "60" ? "chip chip-active" : "chip"}
                onClick={() => setFrequency("60")}
              >
                Every 60 days
              </button>
            </div>
          </div>

          <div className="compliance-callout">
            <p className="meta">21+ only • Age verified at checkout • Adult signature required</p>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2>Details</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Flavor Notes</h3>
            <p className="meta">Icy mint finish with clean sweetness.</p>
          </div>
          <div className="card">
            <h3>Device Specs</h3>
            <p className="meta">18000 puffs • USB-C • Mesh coil</p>
          </div>
          <div className="card">
            <h3>Shipping</h3>
            <p className="meta">Adult signature + ID check on delivery.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
