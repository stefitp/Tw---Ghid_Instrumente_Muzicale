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

export default function InstrumentCard({ instrument }) {
  const iconita = getIconita(instrument);

  return (
    <li className={`item-card card-${instrument.familie} ${instrument.invatat ? "done" : ""}`}>
      <div className="card-top">
        <span className="instrument-avatar rotating-avatar" aria-hidden="true">
          {iconita}
        </span>
        <span className="card-family-label">
          {ETICHETE_FAMILIE[instrument.familie] || instrument.familie}
        </span>
      </div>

      <div className="card-body">
        <h3 className="instrument-title">{instrument.nume}</h3>
      </div>

      <div className="card-footer">
        <span className={`badge badge-${instrument.familie}`}>
          {ETICHETE_FAMILIE[instrument.familie] || instrument.familie}
        </span>
        <span className="status">
          {instrument.invatat ? "✓ Learned" : "To Learn"}
        </span>
      </div>
    </li>
  );
}