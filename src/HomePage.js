import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="questions-container">
      <h1>React Machine Coding Questions</h1>
      <div className="question-list">
        <div className="question-card">
          <Link to="/carousel">1. Custom Carousel</Link>
        </div>
        <div className="question-card">
          <Link to="/progress-bar">2. Progress Bar</Link>
        </div>
        <div className="question-card">
          <Link to="/file-explorer">3. File Explorer</Link>
        </div>
        <div className="question-card">
          <Link to="/autocomplete">4. AutoComplete</Link>
        </div>
        <div className="question-card">
          <Link to="/timer">5. Timer</Link>
        </div>
        <div className="question-card">
          <Link to="/pagination">6. Pagination</Link>
        </div>
        <div className="question-card">
          <Link to="/tabs">7. Tabs</Link>
        </div>
        <div className="question-card">
          <Link to="/infinite-scroller">8. Infinite Scroller</Link>
        </div>
      </div>
    </div>
  );
}
