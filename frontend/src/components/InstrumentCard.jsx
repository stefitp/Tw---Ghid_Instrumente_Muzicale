const ETICHETE_FAMILIE = {
  coarde: "Strings",
  suflat: "Winds",
  percutie: "Percussion"
};

function getIconita(instrument) {
  const numeMic = instrument.nume.toLowerCase();
  if (numeMic.includes("piano") || numeMic.includes("pian")) return "🎹";
  if (numeMic.includes("guitar") || numeMic.includes("chitar")) return "🎸";
  if (numeMic.includes("violin") || numeMic.includes("vioar")) return "🎻";
  if (instrument.familie === "suflat") return "🎷";
  if (instrument.familie === "percutie") return "🥁";
  return "🎵";
}

export default function InstrumentCard({ instrument, onToggle, onDelete }) {
  const iconita = getIconita(instrument);

  return (
    <li className={`item-card card-${instrument.familie} ${instrument.invatat ? "done" : ""}`}>
      {/* Zona superioară: Avatar animat + Familie */}
      <div className="card-top">
        <span className="instrument-avatar rotating-avatar" aria-hidden="true">
          {iconita}
        </span>
        <span className="card-family-label">
          {ETICHETE_FAMILIE[instrument.familie] || instrument.familie}
        </span>
      </div>

      {/* Zona principală: Checkbox controlat cu click pe tot titlul */}
      <div className="card-body">
        <label className="instrument-main">
          <input
            type="checkbox"
            checked={instrument.invatat}
            onChange={() => onToggle(instrument.id)}
          />
          <h3 className="instrument-title">{instrument.nume}</h3>
        </label>
      </div>

      {/* Zona inferioară: Badge, Status și Buton Delete accesibil */}
      <div className="card-footer">
        <div className="footer-meta">
          <span className={`badge badge-${instrument.familie}`}>
            {ETICHETE_FAMILIE[instrument.familie] || instrument.familie}
          </span>
          <span className="status">
            {instrument.invatat ? "✓ Learned" : "To Learn"}
          </span>
        </div>

        <button
          type="button"
          className="btn-danger"
          onClick={() => onDelete(instrument.id)}
          aria-label={`Delete ${instrument.nume}`}
        >
          Delete
        </button>
      </div>
    </li>
  );
}