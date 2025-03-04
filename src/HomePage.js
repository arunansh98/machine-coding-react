import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const pages = [
    {
      label: "Custom Carousel",
      to: "/carousel",
    },
    {
      label: "Progress Bar",
      to: "/progress-bar",
    },
    {
      label: "File Explorer",
      to: "/file-explorer",
    },
    {
      label: "AutoComplete",
      to: "/autocomplete",
    },
    {
      label: "Timer",
      to: "/timer",
    },
    {
      label: "Pagination",
      to: "/pagination",
    },
    {
      label: "Tabs",
      to: "/tabs",
    },
    {
      label: "Infinite Scroller",
      to: "/infinite-scroller",
    },
    {
      label: "File Upload",
      to: "/file-upload",
    },
    {
      label: "E-Commerce Cart",
      to: "/e-commerce-cart",
    },
    {
      label: "Typing Indicator",
      to: "/typing-indicator",
    },
  ];
  return (
    <div className="questions-container">
      <h1>React Machine Coding Questions</h1>
      <div className="question-list">
        {pages.map((page, index) => (
          <div className="question-card">
            <Link to={page.to}>{index + 1 + ". " + page.label}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
