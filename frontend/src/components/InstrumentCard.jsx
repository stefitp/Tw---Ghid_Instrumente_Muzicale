const ETICHETE_FAMILIE = {
  coarde: "Coarde",
  suflat: "Suflat",
  percutie: "Percuție"
};

const ICONITE_FAMILIE = {
  coarde: "🎻",
  suflat: "🎷",
  percutie: "🥁"
};

export default function InstrumentCard({ instrument }) {
  const iconita = ICONITE_FAMILIE[instrument.familie] || "🎵";

  return (
    <li className={`item-card card-${instrument.familie} ${instrument.invatat ? "done" : ""}`}>
      <div className="card-left">
        <span className="instrument-avatar" aria-hidden="true">
          {iconita}
        </span>
        <div className="instrument-info">
          <h3>{instrument.nume}</h3>
          <span className={`badge badge-${instrument.familie}`}>
            {ETICHETE_FAMILIE[instrument.familie] || instrument.familie}
          </span>
        </div>
      </div>

      <div className="card-right">
        <span className="status">
          {instrument.invatat ? "✓ Învățat" : "De învățat"}
        </span>
      </div>
    </li>
  );
}