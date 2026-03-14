import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MapPage from './pages/MapPage';
import AboutPage from './pages/AboutPage';
import EducationPage from './pages/EducationPage';
import GigsPage from './pages/GigsPage';

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/gigs" element={<GigsPage />} />
      </Routes>
    </AnimatePresence>
  );
}
