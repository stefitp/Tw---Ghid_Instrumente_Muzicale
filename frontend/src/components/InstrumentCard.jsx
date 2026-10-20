const ETICHETE_FAMILIE = {
  coarde: "Coarde",
  suflat: "Suflat",
  percutie: "Percuție"
};

export default function InstrumentCard({ instrument }) {
  return (
    <li className={instrument.invatat ? "item-card done" : "item-card"}>
      <div>
        <h3>{instrument.nume}</h3>
        <span className={`badge badge-${instrument.familie}`}>
          {ETICHETE_FAMILIE[instrument.familie] || instrument.familie}
        </span>
      </div>
      <span className="status">
        {instrument.invatat ? "Învățat" : "De învățat"}
      </span>
    </li>
  );
}