export default function Section({ id, eyebrow, title, children, className = '', reveal = true }) {
  return (
    <section id={id} className={`section-shell ${className}`} {...(reveal ? { 'data-reveal': true } : {})}>
      <div className="section-heading">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        {title && <h2>{title}</h2>}
      </div>
      {children}
    </section>
  );
}
