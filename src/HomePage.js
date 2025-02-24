import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="questions-container">
      <h1>React Machine Coding Questions</h1>
      <div className="question-list">
        <div className="question-card">
          <a href="/carousel">1. Custom Carousel Component</a>
        </div>
        <div className="question-card">
          <a href="/progress-bar">2. Progress Bar Component</a>
        </div>
      </div>
    </div>
  );
}
