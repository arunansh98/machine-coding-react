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
import FileUploadPage from "./questions/FileUpload/FileUploadPage";
import ECommerceCartPage from "./questions/ECommerceCart/ECommerceCartPage";
import TypingIndicatorPage from "./questions/TypingIndicatorPage/TypingIndicatorPage";
import WeatherPage from "./questions/Weather/WeatherPage";

const basename =
  process.env.NODE_ENV === "production" ? "/machine-coding-react" : "/";

function App() {
  const routes = [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/carousel",
      component: CarouselPage,
    },
    {
      path: "/progress-bar",
      component: ProgressBarPage,
    },
    {
      path: "/file-explorer",
      component: FileExplorerPage,
    },
    {
      path: "/autocomplete",
      component: AutoCompletePage,
    },
    {
      path: "/timer",
      component: TimerPage,
    },
    {
      path: "/pagination",
      component: PaginationPage,
    },
    {
      path: "/tabs",
      component: TabsPage,
    },
    {
      path: "/infinite-scroller",
      component: InfiniteScrollerPage,
    },
    {
      path: "/file-upload",
      component: FileUploadPage,
    },
    {
      path: "/e-commerce-cart",
      component: ECommerceCartPage,
    },
    {
      path: "/typing-indicator",
      component: TypingIndicatorPage,
    },
    {
      path: "/weather",
      component: WeatherPage,
    },
  ];
  return (
    <Router basename={basename}>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
