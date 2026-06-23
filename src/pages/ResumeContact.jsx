import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';
import Section from '../components/Section';
import { profileLinks } from '../utils/links';

export default function ResumeContact() {
  return (
    <>
      <section className="page-hero" data-reveal>
        <span className="premium-badge">Resume & Contact</span>
        <h1>Let&apos;s Build Useful Engineering Work</h1>
        <p>Resume preview, direct contact channels, and a simple form for collaboration or internship conversations.</p>
      </section>

      <Section title="Resume Preview">
        <div className="two-column">
          <GlassCard className="resume-preview">
            <span className="eyebrow">Mahima Sara Jacob</span>
            <h3>Electronics & Communication Engineering Student</h3>
            <p>Focus areas: embedded systems, IoT connectivity, Arduino programming, circuit simulation, cloud fundamentals, and product-style documentation.</p>
            <a className="btn-primary" href={profileLinks.resume} download><FaDownload /> Download Resume</a>
          </GlassCard>
          <GlassCard>
            <h3>Contact Details</h3>
            <ul className="contact-list">
              <li><FaEnvelope /> <a href={profileLinks.email}>mahimasarajacob@gmail.com</a></li>
              <li><FaPhone /> <a href={profileLinks.phone}>+91 98765 43210</a></li>
              <li><FaMapMarkerAlt /> Kerala, India</li>
              <li><FaGithub /> <a href={profileLinks.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a></li>
              <li><FaLinkedin /> <a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
            </ul>
          </GlassCard>
        </div>
      </Section>

      <Section title="Contact Form">
        <GlassCard className="contact-form-card">
          <form className="contact-form">
            <input type="text" name="name" placeholder="Your name" aria-label="Your name" />
            <input type="email" name="email" placeholder="Your email" aria-label="Your email" />
            <input type="text" name="subject" placeholder="Subject" aria-label="Subject" />
            <textarea name="message" placeholder="Message" aria-label="Message" rows={6} />
            <button className="btn-primary" type="submit">Send Message</button>
          </form>
        </GlassCard>
      </Section>
    </>
  );
}
