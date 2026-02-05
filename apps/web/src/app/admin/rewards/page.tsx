export default function AdminRewardsPage() {
  return (
    <section className="admin-section">
      <div className="admin-toolbar">
        <h2>Rewards & Referrals</h2>
        <button className="btn">Edit Rules</button>
      </div>
      <div className="grid-3">
        <div className="card">
          <h3>Earn Rate</h3>
          <p className="meta">5 pts per $1</p>
        </div>
        <div className="card">
          <h3>Redeem Rate</h3>
          <p className="meta">200 pts = $1</p>
        </div>
        <div className="card">
          <h3>Referral Bonus</h3>
          <p className="meta">$10 credit + 500 pts</p>
        </div>
      </div>
    </section>
  );
}
