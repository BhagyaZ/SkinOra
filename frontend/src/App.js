import Home from './components/Home/Home.js';
import ShopAll from './components/ShopAll/ShopAll.js';
import NavBar from './components/NavBar/NavBar.js';
import Footer from './components/Footer/Footer.js';
import SkinCareGuide from './components/SkinCareGuide/SkinCareGuide.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shopall" element={<ShopAll />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/guide" element={<SkinCareGuide />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
