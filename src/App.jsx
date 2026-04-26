import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import OverOns from './pages/OverOns';
import Werkwijze from './pages/Werkwijze';
import Veiligheid from './pages/Veiligheid';
import Projecten from './pages/Projecten';
import ProjectDetail from './pages/ProjectDetail';
import Vacatures from './pages/Vacatures';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <ScrollToTop />
      <Navigation />
      <main id="main" key={`${location.pathname}${location.search}`} className="site-main page-transition">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/werkwijze" element={<Werkwijze />} />
          <Route path="/werkwijze/onderzoek-en-advies" element={<Navigate to="/werkwijze" replace />} />
          <Route path="/werkwijze/de-uitvoering" element={<Navigate to="/werkwijze" replace />} />
          <Route path="/werkwijze/het-eindrapport" element={<Navigate to="/werkwijze" replace />} />
          <Route path="/veiligheid" element={<Veiligheid />} />
          <Route path="/projecten" element={<Projecten />} />
          <Route path="/projecten/:projectSlug" element={<ProjectDetail />} />
          <Route path="/vacatures" element={<Vacatures />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
