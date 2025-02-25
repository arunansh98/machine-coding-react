import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import CarouselPage from "./questions/Carousel/CarouselPage";
import ProgressBarPage from "./questions/ProgressBar/ProgressBarPage";
import FileExplorerPage from "./questions/FileExplorer/FileExplorerPage";
import AutoCompletePage from "./questions/AutoComplete/AutoCompletePage";
import TimerPage from "./questions/Timer/TimerPage";
import PaginationPage from "./questions/Pagination/PaginationPage";
import TabsPage from "./questions/Tabs/TabsPage";
import InfiniteScrollerPage from "./questions/InfiniteScroller/InfiniteScrollerPage";

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
        <Route path="/autocomplete" element={<AutoCompletePage />} />
        <Route path="/timer" element={<TimerPage />} />
        <Route path="/pagination" element={<PaginationPage />} />
        <Route path="/tabs" element={<TabsPage />} />
        <Route path="/infinite-scroller" element={<InfiniteScrollerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
