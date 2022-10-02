import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./LandingPage/LandingPage";
import CreatePage from './CreatePage/CreatePage';
import EventPage from './EventPage/EventPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/create" exact element={<CreatePage />} />
        <Route path="/event" exact element={<EventPage />} />

      </Routes>
    </Router>

  );
}

export default App;
