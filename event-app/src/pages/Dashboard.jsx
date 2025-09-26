import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Event Management Dashboard 🎉</h1>
      <div className="card-container">
        <div className="card">📅 Manage Events</div>
        <div className="card">👥 Manage Attendees</div>
        <div className="card">💰 Payments & Reports</div>
      </div>
    </div>
  );
}
