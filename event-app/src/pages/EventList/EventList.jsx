import { Link } from "react-router-dom";
import "./EventList.css";

export default function EventList() {
  const events = [
    { id: 1, title: "Tech Summit 2025", date: "2025-10-15", location: "Bangalore" },
    { id: 2, title: "Music Fest", date: "2025-11-05", location: "Goa" },
  ];

  return (
    <div className="eventlist-container">
      <h2>Upcoming Events</h2>
      <input className="search-box" placeholder="Search events..." />

      <div className="event-cards">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p>📅 {event.date}</p>
            <p>📍 {event.location}</p>
            <Link to={`/events/${event.id}`} className="detail-btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
