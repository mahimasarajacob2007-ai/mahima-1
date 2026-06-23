import { Route, Routes } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout.jsx';
import Home from './pages/Home.jsx';
import InternshipTracker from './pages/InternshipTracker.jsx';
import TinkercadProjects from './pages/TinkercadProjects.jsx';
import ResumeContact from './pages/ResumeContact.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pm-vikas-tracker" element={<InternshipTracker />} />
        <Route path="/tinkercad-projects" element={<TinkercadProjects />} />
        <Route path="/resume-contact" element={<ResumeContact />} />
      </Route>
    </Routes>
  );
}
