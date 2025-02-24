import ProgressBar from "./ProgressBar";
import "./ProgressBar.css";

export default function ProgressBarPage() {
  const bars = [5, 10, 50, 80, 100];
  const renderedBars = bars.map((bar) => <ProgressBar progress={bar} />);
  return (
    <div className="progress-bar">
      <div
        style={{
          width: "50%",
        }}
      >
        <h1>Progress Bar</h1>
        {renderedBars}
      </div>
    </div>
  );
}
