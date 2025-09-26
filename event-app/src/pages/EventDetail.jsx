import { useState } from "react";
import "./EventDetail.css";

export default function EventDetail({ events, setEvents, setUserRsvps }) {
  const [event, setEvent] = useState({ title: "", date: "", location: "", description: "" });
  const [rsvp, setRsvp] = useState({ name: "", email: "", attendees: 1 });
  const [eventCreated, setEventCreated] = useState(false);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const handleEventChange = (e) => setEvent({ ...event, [e.target.name]: e.target.value });
  const handleRsvpChange = (e) => setRsvp({ ...rsvp, [e.target.name]: e.target.value });

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const newEvent = { id: Date.now(), ...event };
    setEvents([...events, newEvent]);
    setEventCreated(true);
    setEvent({ title: "", date: "", location: "", description: "" });
  };

  const handleRsvpSubmit = (e) => {
    e.preventDefault();
    if (!event.title) {
      alert("Please select or enter an event first!");
      return;
    }
    const newRsvp = { ...rsvp, eventTitle: event.title || events[events.length - 1].title };
    setUserRsvps((prev) => [...prev, newRsvp]);
    setRsvpSubmitted(true);
    setRsvp({ name: "", email: "", attendees: 1 });
  };

  return (
    <div className="eventdetail-container">
      <div className="event-section">
        {!eventCreated ? (
          <form className="event-form" onSubmit={handleEventSubmit}>
            <h2>Admin: Create Event</h2>
            <input type="text" name="title" placeholder="Event Title" value={event.title} onChange={handleEventChange} required />
            <input type="date" name="date" value={event.date} onChange={handleEventChange} required />
            <input type="text" name="location" placeholder="Location" value={event.location} onChange={handleEventChange} required />
            <textarea name="description" placeholder="Event Description" value={event.description} onChange={handleEventChange} required />
            <button type="submit" className="rsvp-btn">Create Event</button>
          </form>
        ) : (
          <div className="rsvp-success">🎉 Event Created Successfully!</div>
        )}
      </div>

      <hr />

      <div className="rsvp-section">
        {!rsvpSubmitted ? (
          <form className="rsvp-form" onSubmit={handleRsvpSubmit}>
            <h2>User: RSVP for Event</h2>
            <input type="text" name="name" placeholder="Your Name" value={rsvp.name} onChange={handleRsvpChange} required />
            <input type="email" name="email" placeholder="Your Email" value={rsvp.email} onChange={handleRsvpChange} required />
            <input type="number" name="attendees" min="1" placeholder="Number of Attendees" value={rsvp.attendees} onChange={handleRsvpChange} required />
            <button type="submit" className="rsvp-btn">Submit RSVP</button>
          </form>
        ) : (
          <div className="rsvp-success">🎉 Your RSVP has been submitted.</div>
        )}
      </div>
    </div>
  );
}
