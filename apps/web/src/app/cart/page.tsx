"use client";

import { useMemo, useState } from "react";
import FormNotice from "./FormNotice";


export default function CartPage() {
  const [couponCode, setCouponCode] = useState("SAVE10");
  const [pointsToRedeem, setPointsToRedeem] = useState(400);
  const [items, setItems] = useState([
    {
      id: "sku_frozen_lab",
      name: "Frozen Lab Device 18000",
      meta: "Arctic Mint • 5%",
      price: 18.99,
      qty: 2,
    },
    {
      id: "sku_nova_pro",
      name: "Nova Pro 18000",
      meta: "Blueberry Ice • 5%",
      price: 19.99,
      qty: 1,
    },
  ]);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.qty, 0),
    [items]
  );
  const shipping = subtotal > 80 ? 0 : 6.99;
  const tax = subtotal * 0.0726;
  const couponDiscount = couponCode ? Math.min(10, subtotal * 0.15) : 0;
  const pointsValue = Math.min(pointsToRedeem / 200, subtotal * 0.2);
  const discount = couponDiscount + pointsValue;
  const total = subtotal + shipping + tax - discount;

  const updateQty = (id: string, nextQty: number) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, nextQty) } : item
      )
    );
  };

  return (
    <main className="page">
      <section className="container">
        <h1>Cart</h1>
        <div className="cart-grid">
          <div className="card">

            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <div>
                  <h3>{item.name}</h3>
                  <p className="meta">{item.meta}</p>
                  <div className="qty-row cart-qty">
                    <button className="chip" onClick={() => updateQty(item.id, item.qty - 1)}>
                      -
                    </button>
                    <span className="qty-value">{item.qty}</span>
                    <button className="chip" onClick={() => updateQty(item.id, item.qty + 1)}>
                      +
                    </button>
                  </div>
                </div>
                <p className="meta">${(item.price * item.qty).toFixed(2)}</p>
              </div>
            ))}
            <FormNotice type="hint" message="Update quantities in checkout before placing your order." />
          </div>

          <aside className="card summary">
            <h3>Order Summary</h3>
            <div className="coupon-grid">
              <input
                placeholder="Coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <input
                type="number"
                min={0}
                placeholder="Points to redeem"
                value={pointsToRedeem}
                onChange={(e) => setPointsToRedeem(Number(e.target.value))}
              />
            </div>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Promo & Rewards</span>
              <span>-${discount.toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="btn">Checkout</button>
            <p className="meta">21+ only. Adult signature required on delivery.</p>
            <FormNotice type="error" message="Age verification is required at checkout." />
          </aside>
        </div>
      </section>
    </main>
  );
}
