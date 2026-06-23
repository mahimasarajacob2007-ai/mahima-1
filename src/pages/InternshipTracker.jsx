import { useMemo, useState } from 'react';
import GlassCard from '../components/GlassCard';
import Section from '../components/Section';
import { internshipActivities } from '../data/internship';
import { formatDay, formatDisplayDate } from '../utils/dates';

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
          <GlassCard><strong>{formatDisplayDate(new Date(`${metrics.today.date}T00:00:00`))}</strong><span>Today&apos;s Activity</span></GlassCard>
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
