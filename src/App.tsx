import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import HomePage from "./pages/HomePage"; // Home page content
import LearnMore from "./pages/LearnMore"; // Learn More page content

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />

        {/* Learn More page route */}
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
    </Router>
  );
};

export default App;
