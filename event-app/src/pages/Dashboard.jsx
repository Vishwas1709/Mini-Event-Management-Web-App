import { useState } from "react";
import "./Dashboard.css";

export default function Dashboard({ events, userRsvps, setUserRsvps }) {
  const [selectedAttendees, setSelectedAttendees] = useState({});

  const handleRsvp = (event) => {
    const attendees = selectedAttendees[event.id] || 1;

    const newRsvp = {
      name: "User", // You can replace with logged-in username later
      email: "user@example.com", // Replace with actual user email
      attendees: attendees,
      eventTitle: event.title,
    };

    setUserRsvps((prev) => [...prev, newRsvp]);

    // Reset attendees input for this event
    setSelectedAttendees({ ...selectedAttendees, [event.id]: 1 });
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome Back 👋</h1>

      <div className="dashboard-sections">
        <div className="card">
          <h3>Upcoming Events</h3>
          {events.length === 0 ? (
            <p>No upcoming events.</p>
          ) : (
            <ul>
              {events.map((event) => (
                <li key={event.id} className="event-item">
                  <div>
                    📅 {event.title} - {event.date} at {event.location}
                  </div>
                  <div className="rsvp-controls">
                    <input
                      type="number"
                      min="1"
                      value={selectedAttendees[event.id] || 1}
                      onChange={(e) =>
                        setSelectedAttendees({
                          ...selectedAttendees,
                          [event.id]: parseInt(e.target.value),
                        })
                      }
                      className="attendees-input"
                    />
                    <button onClick={() => handleRsvp(event)} className="rsvp-btn">
                      RSVP
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="card">
          <h3>Your RSVPs</h3>
          {userRsvps.length === 0 ? (
            <p>No RSVPs yet.</p>
          ) : (
            <ul>
              {userRsvps.map((rsvp, index) => (
                <li key={index}>
                  ✔️ {rsvp.name} - {rsvp.eventTitle} ({rsvp.attendees} attendee(s))
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
