import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/100"
          alt="User"
          className="profile-avatar"
        />
        <h2>Vishwas Chandra M C</h2>
        <p>Email: vishwas@example.com</p>
        <p>Member since: Jan 2024</p>

        <div className="profile-buttons">
          <button>Change Password</button>
          <button>Watchlist</button>
          <button>Logout</button>
        </div>
      </div>

      <div className="extra-section">
        <h3>Recent Activity</h3>
        <ul>
          <li>✔️ Registered for "Tech Summit 2025"</li>
          <li>✔️ Updated profile information</li>
          <li>✔️ Added 3 events to Watchlist</li>
        </ul>

        <h3>Account Settings</h3>
        <ul>
          <li>🔔 Notification Preferences</li>
          <li>💳 Payment Methods</li>
          <li>📄 Billing History</li>
        </ul>
      </div>
    </div>
  );
}
