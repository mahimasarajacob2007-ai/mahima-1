import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
import Navbar from '../components/Navbar';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function SiteLayout() {
  const [loaded, setLoaded] = useState(false);
  const location = useLocation();
  useScrollReveal(location.pathname);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <>
      <LoadingScreen isDone={loaded} />
      <div className="site-bg">
        <div className="particle particle-one" />
        <div className="particle particle-two" />
        <div className="particle particle-three" />
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
