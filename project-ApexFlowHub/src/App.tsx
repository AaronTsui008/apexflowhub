import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#060912] flex flex-col">
        <Navbar page={page} setPage={setPage} />
        <main className="flex-1">
          {page === 'dashboard' ? (
            <Dashboard />
          ) : (
            <LandingPage setPage={setPage} />
          )}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
