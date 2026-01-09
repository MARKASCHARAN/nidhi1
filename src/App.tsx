import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Certifications from './pages/Certifications';
import Experience from './pages/Experience';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-white selection:bg-primary-500 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
