import Home from './components/Home/Home.js';
import ShopAll from './components/ShopAll/ShopAll.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shopall" element={<ShopAll />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
