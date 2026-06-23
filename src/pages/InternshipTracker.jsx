import { useEffect, useMemo, useState } from 'react';
import GlassCard from '../components/GlassCard';
import Section from '../components/Section';
import { internshipActivities } from '../data/internship';
import { formatDay, formatDisplayDate } from '../utils/dates';

function formatUptime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${String(hours).padStart(2, '0')}h : ${String(minutes).padStart(2, '0')}m : ${String(seconds).padStart(2, '0')}s`;
}

function randomInRange(min, max) {
  return (Math.random() * (max - min) + min).toFixed(1);
}

function TelemetryMonitor({ activity }) {
  const [clock, setClock] = useState(new Date());
  const [startedAt] = useState(() => Date.now());
  const [stats, setStats] = useState({ temp: '42.4', ram: '64.2' });

  useEffect(() => {
    const clockTimer = window.setInterval(() => setClock(new Date()), 1000);
    const statTimer = window.setInterval(() => {
      setStats({
        temp: randomInRange(41, 44),
        ram: randomInRange(62, 66),
      });
    }, 2600);

    return () => {
      window.clearInterval(clockTimer);
      window.clearInterval(statTimer);
    };
  }, []);

  const uptime = Math.floor((Date.now() - startedAt) / 1000);
  const localTime = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(clock);

  return (
    <GlassCard className="telemetry-card">
      <div className="telemetry-wave" aria-hidden="true">
        <span />
      </div>
      <div className="ping-status">
        <span aria-hidden="true" />
        PING: 12ms
      </div>
      <span className="telemetry-label">Today&apos;s Activity</span>
      <strong>{localTime}</strong>
      <small>SYS_UPTIME: {formatUptime(uptime)}</small>
      <div className="micro-stat-row">
        <span>MCU_TEMP: {stats.temp}&deg;C</span>
        <span>RAM_LOAD: {stats.ram}%</span>
      </div>
      <p>{formatDisplayDate(new Date(`${activity.date}T00:00:00`))}</p>
    </GlassCard>
  );
}

export default function InternshipTracker() {
  const [activities, setActivities] = useState(
    internshipActivities.map(([date, status, notes]) => ({ date, status, notes: notes.join('\n') })),
  );

  const metrics = useMemo(() => {
    const completed = activities.filter((item) => item.status === 'Completed').length;
    const inProgress = activities.filter((item) => item.status === 'In Progress').length;
    const percentage = Math.round((completed / activities.length) * 100);
    const today = activities.find((item) => item.date === '2026-06-23') || activities[activities.length - 1];
    return { completed, pending: activities.length - completed, inProgress, percentage, today };
  }, [activities]);

  function updateActivity(index, patch) {
    setActivities((current) => current.map((item, itemIndex) => (itemIndex === index ? { ...item, ...patch } : item)));
  }

  return (
    <>
      <section className="page-hero" data-reveal>
        <span className="premium-badge">18 May 2026 - 30 June 2026</span>
        <h1>PM Vikas Internship Tracker</h1>
        <p>Daily engineering diary for networking, cloud, electronics, Arduino programming, and product development.</p>
      </section>

      <Section title="Dashboard Widgets">
        <div className="dashboard-grid">
          <GlassCard><strong>{metrics.percentage}%</strong><span>Completion Percentage</span><div className="progress"><span style={{ width: `${metrics.percentage}%` }} /></div></GlassCard>
          <GlassCard><strong>{metrics.completed}</strong><span>Completed Tasks</span></GlassCard>
          <GlassCard><strong>{metrics.pending}</strong><span>Pending Tasks</span></GlassCard>
          <GlassCard><strong>{activities.length}</strong><span>Total Working Days</span></GlassCard>
          <GlassCard><strong>{metrics.inProgress}</strong><span>Active Reviews</span></GlassCard>
          <TelemetryMonitor activity={metrics.today} />
        </div>
      </Section>

      <Section title="Working Day Activity Cards">
        <div className="activity-grid">
          {activities.map((activity, index) => {
            const date = new Date(`${activity.date}T00:00:00`);
            return (
              <GlassCard key={activity.date} className="activity-card">
                <div className="activity-head">
                  <div>
                    <span className="eyebrow">{formatDay(date)}</span>
                    <h3>{formatDisplayDate(date)}</h3>
                  </div>
                  <select value={activity.status} onChange={(event) => updateActivity(index, { status: event.target.value })}>
                    <option>Completed</option>
                    <option>In Progress</option>
                    <option>Pending</option>
                  </select>
                </div>
                <textarea value={activity.notes} onChange={(event) => updateActivity(index, { notes: event.target.value })} rows={7} />
              </GlassCard>
            );
          })}
        </div>
      </Section>
    </>
  );
}
