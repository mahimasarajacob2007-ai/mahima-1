import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { profileLinks } from '../utils/links';

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Mahima Sara Jacob</strong>
        <p>Electronics & Communication Engineering | IoT | Embedded Systems</p>
      </div>
      <div className="social-row">
        <a href={profileLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href={profileLinks.email} aria-label="Email"><FaEnvelope /></a>
      </div>
    </footer>
  );
}
