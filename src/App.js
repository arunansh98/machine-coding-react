import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CarouselPage from "./questions/Carousel/CarouselPage";
import ProgressBarPage from "./questions/ProgressBar/ProgressBarPage";
import FileExplorerPage from "./questions/FileExplorer/FileExplorerPage";

const basename =
  process.env.NODE_ENV === "production" ? "/machine-coding-react" : "/";

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/carousel" element={<CarouselPage />} />
        <Route path="/progress-bar" element={<ProgressBarPage />} />
        <Route path="/file-explorer" element={<FileExplorerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
