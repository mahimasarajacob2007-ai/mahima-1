export default function LoadingScreen({ isDone }) {
  return (
    <div className={`loader ${isDone ? 'loader-hidden' : ''}`} aria-hidden={isDone}>
      <div className="loader-ring" />
      <h1>Mahima Sara Jacob</h1>
    </div>
  );
}
