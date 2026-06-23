export default function GlassCard({ children, className = '', as: Component = 'div' }) {
  return <Component className={`glass-card ${className}`}>{children}</Component>;
}
