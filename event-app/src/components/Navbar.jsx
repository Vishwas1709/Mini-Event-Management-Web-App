import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Event Manager</div>
      <ul className="nav-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/events/new" className="create-event-btn">Create Event</Link></li>
        

        <li>
          <Link to="/profile" className="profile-link">
            <img
              src="https://via.placeholder.com/30"
              alt="Profile"
              className="profile-img"
            />
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
}
