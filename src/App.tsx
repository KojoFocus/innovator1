import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router components
import AppContents from "./components/HomePage"; // Home page content
import LearnMore from "../src/pages/LearnMore"; // Learn More page content

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<AppContents />} />

        {/* Learn More page route */}
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
    </Router>
  );
};

export default App;
