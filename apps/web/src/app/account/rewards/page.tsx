export default function RewardsPage() {
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Rewards</h1>
          <p className="meta">Turn every order into points. Redeem at checkout instantly.</p>
        </div>
      </section>

      <section className="container">
        <div className="rewards-hero">
          <div className="card rewards-balance">
            <h3>Points Balance</h3>
            <p className="points">1,240 pts</p>
            <p className="meta">$6.20 value • 760 pts to next $10</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "62%" }} />
            </div>
          </div>
          <div className="card rewards-action">
            <h3>Redeem at Checkout</h3>
            <p className="meta">Use points for instant discounts.</p>
            <div className="reward-cta">
              <button className="btn glow">Apply Points</button>
              <button className="btn secondary">View History</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Earn More</h2>
          <p className="meta">Complete quick actions to boost your balance.</p>
        </div>
        <div className="grid-3">
          <div className="card task-card">
            <h3>Leave a Review</h3>
            <p className="meta">+50 pts per product review.</p>
            <button className="btn secondary">Write Review</button>
          </div>
          <div className="card task-card">
            <h3>Start a Subscription</h3>
            <p className="meta">+100 pts on first subscription.</p>
            <button className="btn secondary">Subscribe</button>
          </div>
          <div className="card task-card">
            <h3>Refer a Friend</h3>
            <p className="meta">+300 pts when they order.</p>
            <button className="btn secondary">Invite</button>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>Redeem Ideas</h2>
          <p className="meta">Popular ways customers use points.</p>
        </div>
        <div className="grid-3">
          <div className="card">
            <h3>$5 Off</h3>
            <p className="meta">1,000 pts</p>
          </div>
          <div className="card">
            <h3>Free Shipping</h3>
            <p className="meta">1,600 pts</p>
          </div>
          <div className="card">
            <h3>Bundle Unlock</h3>
            <p className="meta">2,400 pts</p>
          </div>
        </div>
      </section>
    </main>
  );
}
