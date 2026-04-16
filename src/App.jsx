import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import OverOns from './pages/OverOns';
import Werkwijze from './pages/Werkwijze';
import Veiligheid from './pages/Veiligheid';
import Projecten from './pages/Projecten';
import Vacatures from './pages/Vacatures';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main id="main" className="site-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over-ons" element={<OverOns />} />
          <Route path="/werkwijze" element={<Werkwijze />} />
          <Route path="/werkwijze/onderzoek-en-advies" element={<Werkwijze />} />
          <Route path="/werkwijze/de-uitvoering" element={<Werkwijze />} />
          <Route path="/werkwijze/het-eindrapport" element={<Werkwijze />} />
          <Route path="/veiligheid" element={<Veiligheid />} />
          <Route path="/projecten" element={<Projecten />} />
          <Route path="/vacatures" element={<Vacatures />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
