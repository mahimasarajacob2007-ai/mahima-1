import { useMemo, useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaSearch } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';
import Section from '../components/Section';
import { projectCategories, projects } from '../data/projects';
import { buildGithubUrl, buildProjectLink, buildTinkercadImageUrl } from '../utils/links';

export default function TinkercadProjects() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = category === 'All' || project.category === category;
      const matchesQuery = !normalized || [project.title, project.description, ...project.components].join(' ').toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const categoryCounts = useMemo(() => projects.reduce((counts, project) => ({
    ...counts,
    [project.category]: (counts[project.category] || 0) + 1,
  }), {}), []);

  return (
    <>
      <section className="page-hero" data-reveal>
        <span className="premium-badge">30 Circuit Simulations</span>
        <h1>Tinkercad Projects Gallery</h1>
        <p>Searchable archive of sensor, actuator, and combined IoT simulation projects.</p>
      </section>

      <Section title="Project Explorer">
        <div className="project-toolbar">
          <label className="search-box">
            <FaSearch />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects, components, or concepts" />
          </label>
          <div className="filter-row">
            {projectCategories.map((item) => (
              <button type="button" key={item} className={category === item ? 'filter-active' : ''} onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="counter-grid compact">
          <GlassCard><strong>{categoryCounts['Sensor Projects']}</strong><span>Sensor Projects</span></GlassCard>
          <GlassCard><strong>{categoryCounts['Actuator Projects']}</strong><span>Actuator Projects</span></GlassCard>
          <GlassCard><strong>{categoryCounts['Sensor + Actuator Projects']}</strong><span>Sensor + Actuator</span></GlassCard>
        </div>
      </Section>

      <Section title={`${filteredProjects.length} Projects`} reveal={false}>
        <div className="gallery-grid">
          {filteredProjects.map((project) => (
            <GlassCard key={project.slug} className="project-card">
              <div className="project-image">
                <img src={buildTinkercadImageUrl(project.tinkercadImage)} alt={`${project.title} circuit screenshot`} loading="lazy" />
              </div>
              <div className="project-card-body">
                <div className="project-card-title">
                  <h3>{project.title}</h3>
                  <span>{project.difficulty}</span>
                </div>
                <p>{project.description}</p>
                <div className="mini-list">
                  <strong>Components</strong>
                  <span>{project.components.join(', ')}</span>
                </div>
                <div className="mini-list">
                  <strong>Technologies</strong>
                  <span>{project.technologies.join(', ')}</span>
                </div>
                <div className="button-row">
                  <a className="btn-secondary" href={buildGithubUrl(project.githubFolder)} target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a>
                  <a className="btn-primary" href={buildProjectLink(project)} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Tinkercad</a>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>
    </>
  );
}
