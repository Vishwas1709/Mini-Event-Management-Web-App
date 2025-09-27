import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import EventList from "./pages/EventList/EventList";
import EventDetail from "./pages/EventDetail/EventDetail";
import AdminEvents from "./pages/AdminEvents/AdminEvents";


function App() {
  // Shared state for events & RSVPs
  const [events, setEvents] = useState([
    { id: 1, title: "Tech Summit 2025", date: "2025-10-15", location: "Bangalore" }
  ]);

  const [userRsvps, setUserRsvps] = useState([]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={<Dashboard events={events} userRsvps={userRsvps} />}
        />
        <Route path="/profile" element={<Profile />} />
      
        <Route
          path="/events"
          element={<EventList events={events} />}
        />
        <Route
          path="/events/:id"
          element={
            <EventDetail events={events} userRsvps={userRsvps} setUserRsvps={setUserRsvps} />
          }
        />
        <Route
          path="/admin"
          element={<AdminEvents events={events} setEvents={setEvents} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
