import { BrowserRouter , Routes, Route} from "react-router-dom";
import StartPage from "./pages/StartPage";
import MapPage from "./pages/MapPage";
import CatDetailPage from "./pages/CatDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/cat/:id" element={<CatDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;