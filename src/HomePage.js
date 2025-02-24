import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="questions-container">
      <h1>React Machine Coding Questions</h1>
      <div className="question-list">
        <div className="question-card">
          <Link to="/carousel">1. Custom Carousel Component</Link>
        </div>
        <div className="question-card">
          <Link to="/progress-bar">2. Progress Bar Component</Link>
        </div>
        <div className="question-card">
          <Link to="/file-explorer">3. File Explorer Component</Link>
        </div>
        <div className="question-card">
          <Link to="/autocomplete">4. AutoComplete Component</Link>
        </div>
      </div>
    </div>
  );
}
