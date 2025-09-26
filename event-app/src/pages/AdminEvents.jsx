import { useState } from "react";
import "./AdminEvents.css";

export default function AdminEvents() {
  const [events, setEvents] = useState([
    { id: 1, title: "Tech Summit 2025", date: "2025-10-15", location: "Bangalore" },
    { id: 2, title: "Music Fest", date: "2025-11-05", location: "Goa" },
  ]);

  const [newEvent, setNewEvent] = useState({ title: "", date: "", location: "" });

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.location) return;
    setEvents([...events, { id: Date.now(), ...newEvent }]);
    setNewEvent({ title: "", date: "", location: "" });
  };

  const handleDelete = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const handleEdit = (id) => {
    const eventToEdit = events.find((event) => event.id === id);
    setNewEvent(eventToEdit);
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="admin-container">
      <h2>Admin Event Management</h2>

      <div className="event-form">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={newEvent.location}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add / Update Event</button>
      </div>

      <div className="event-table">
        <table>
          <thead>
            <tr>
              <th>Event Title</th>
              <th>Date</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.title}</td>
                <td>{event.date}</td>
                <td>{event.location}</td>
                <td>
                  <button onClick={() => handleEdit(event.id)} className="edit-btn">Edit</button>
                  <button onClick={() => handleDelete(event.id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
