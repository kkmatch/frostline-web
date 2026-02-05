export default function ReferralsPage() {
  return (
    <main className="page">
      <section className="page-hero">
        <div className="container">
          <h1>Referrals</h1>
          <p className="meta">Invite friends, earn points, and unlock bonus rewards.</p>
        </div>
      </section>

      <section className="container">
        <div className="referral-grid">
          <div className="card referral-card">
            <h3>Your Invite Link</h3>
            <p className="meta">Share this link to give friends a welcome offer.</p>
            <div className="referral-link">
              <span>https://frostline.co/r/you</span>
              <button className="btn">Copy Link</button>
            </div>
            <div className="referral-actions">
              <button className="btn secondary">Send by Email</button>
              <button className="btn secondary">Share QR</button>
            </div>
          </div>

          <div className="referral-stats">
            <div className="card">
              <h3>Bonus Earned</h3>
              <p className="meta">1,200 pts</p>
            </div>
            <div className="card">
              <h3>Invites Sent</h3>
              <p className="meta">14</p>
            </div>
            <div className="card">
              <h3>Friends Joined</h3>
              <p className="meta">5</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-head">
          <h2>How It Works</h2>
          <p className="meta">Three quick steps to earn referral bonuses.</p>
        </div>
        <div className="grid-3">
          <div className="card">
            <h3>1. Share</h3>
            <p className="meta">Send your invite link to friends.</p>
          </div>
          <div className="card">
            <h3>2. Friend Orders</h3>
            <p className="meta">They get a welcome offer at checkout.</p>
          </div>
          <div className="card">
            <h3>3. You Earn</h3>
            <p className="meta">Points land in your account instantly.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
