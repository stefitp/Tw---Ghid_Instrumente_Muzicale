import InstrumentCard from "./InstrumentCard.jsx";

export default function InstrumentList({ instrumente }) {
  // 1. Verificare timpurie pentru cazul în care lista este goală
  if (instrumente.length === 0) {
    return <p className="empty">Nu există niciun instrument.</p>;
  }

  // 2. Randarea listei de carduri
  return (
    <ul className="item-list">
      {instrumente.map((instrument) => (
        <InstrumentCard key={instrument.id} instrument={instrument} />
      ))}
    </ul>
  );
}