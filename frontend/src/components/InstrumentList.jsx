import InstrumentCard from "./InstrumentCard.jsx";

export default function InstrumentList({ instrumente, onToggle, onDelete }) {
  if (instrumente.length === 0) {
    return <p className="empty">No instruments found in the catalog.</p>;
  }

  return (
    <ul className="item-list">
      {instrumente.map((instrument) => (
        <InstrumentCard
          key={instrument.id}
          instrument={instrument}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}