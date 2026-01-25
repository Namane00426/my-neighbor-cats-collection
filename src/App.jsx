import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage.jsx';
import MapPage from './pages/MapPage.jsx';
import CatDetailPage from './pages/CatDetailPage.jsx';
import AddCatPage from './pages/AddCatPage.jsx';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/cat/:id" element={<CatDetailPage />} />
        <Route path="/add" element={<AddCatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;