import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="panel" data-testid="not-found">
      <h2>404 — Page Not Found</h2>
      <p className="info">The address you requested does not exist in MusicGuide.</p>
      <Link to="/">&larr; Back to Instruments</Link>
    </section>
  );
}