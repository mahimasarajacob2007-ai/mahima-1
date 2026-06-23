import { FaDownload, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';
import Section from '../components/Section';
import { achievements, certifications, counters, skills, softSkills, timeline } from '../data/profile';
import { projects } from '../data/projects';
import { profileLinks } from '../utils/links';

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="hero" data-reveal>
        <div className="hero-copy">
          <span className="premium-badge">IoT Assistant Intern at IIIT Kottayam</span>
          <h1>Mahima Sara Jacob</h1>
          <p className="hero-role">Electronics & Communication Engineering Student</p>
          <p>
            Building practical engineering confidence through circuits, embedded programming, IoT connectivity,
            cloud concepts, and product-style prototype validation at College of Engineering Kidangoor.
          </p>
          <div className="button-row">
            <a className="btn-primary" href={profileLinks.resume} download><FaDownload /> Resume</a>
            <a className="btn-secondary" href={profileLinks.github} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
            <a className="btn-secondary" href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a>
          </div>
        </div>
        <div className="profile-orbit" aria-label="Interactive microchip module">
          <div className="profile-frame">
            <div className="chip-pins chip-pins-left" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="chip-pins chip-pins-right" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="status-ring" aria-hidden="true" />
            <span className="chip-initials">MSJ</span>
            <div className="chip-status">
              <span className="hardware-dot" aria-hidden="true" />
              <small>[ SYSTEM: ONLINE ]</small>
            </div>
          </div>
        </div>
      </section>

      <div className="counter-grid" data-reveal>
        {counters.map((counter) => (
          <GlassCard key={counter.label}>
            <strong>{counter.value}</strong>
            <span>{counter.label}</span>
          </GlassCard>
        ))}
      </div>

      <Section eyebrow="About" title="Engineering With Practical Direction">
        <div className="two-column">
          <GlassCard>
            <h3>About Me</h3>
            <p>
              I am an Electronics and Communication Engineering student focused on making circuits, code, and IoT
              systems understandable, testable, and useful. My current work connects microcontrollers, sensors,
              cloud basics, simulation, and documentation into portfolio-ready engineering practice.
            </p>
          </GlassCard>
          <GlassCard>
            <h3>Career Objective</h3>
            <p>
              To grow as an embedded and IoT engineer by contributing to reliable product prototypes, learning from
              real hardware behavior, and building solutions that combine electronics, communication, and software.
            </p>
          </GlassCard>
        </div>
      </Section>

      <Section eyebrow="Academic Foundation" title="Education & Internship">
        <div className="timeline">
          {timeline.map((item) => (
            <GlassCard key={item.title}>
              <span className="eyebrow">{item.meta}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Capability" title="Technical Skills">
        <div className="skill-grid">
          {skills.map(({ name, level, icon: Icon }) => (
            <GlassCard key={name}>
              <div className="skill-title"><Icon /> <span>{name}</span></div>
              <div className="progress"><span style={{ width: `${level}%` }} /></div>
              <small>{level}% applied confidence</small>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Collaboration" title="Soft Skills">
        <div className="tag-cloud">
          {softSkills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </Section>

      <Section eyebrow="Selected Work" title="Featured Projects">
        <div className="project-preview-grid">
          {featured.map((project) => (
            <GlassCard key={project.slug}>
              <span className="premium-badge">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Proof" title="Certifications & Achievements">
        <div className="two-column">
          <GlassCard>
            <h3>Certifications</h3>
            <ul className="clean-list">
              {certifications.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </GlassCard>
          <div className="achievement-stack">
            {achievements.map(({ icon: Icon, title, body }) => (
              <GlassCard key={title}>
                <div className="achievement-icon"><Icon /></div>
                <h3>{title}</h3>
                <p>{body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Contact Preview" title="Ready For Engineering Conversations">
        <GlassCard className="contact-preview">
          <p>Available for academic project discussions, internships, embedded systems learning, and IoT collaboration.</p>
          <a className="btn-primary" href="/resume-contact"><FaPaperPlane /> Contact Mahima</a>
        </GlassCard>
      </Section>
    </>
  );
}
