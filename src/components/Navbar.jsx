import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navItems } from '../data/profile';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-wrap">
      <nav className="nav">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          MSJ
        </NavLink>
        <button className="menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <FaTimes /> : <FaBars />}
        </button>
        <div className={`nav-links ${open ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'active' : '')}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
