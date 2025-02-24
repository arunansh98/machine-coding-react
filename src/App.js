import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import CarouselPage from "./questions/Carousel/CarouselPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/carousel" element={<CarouselPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
