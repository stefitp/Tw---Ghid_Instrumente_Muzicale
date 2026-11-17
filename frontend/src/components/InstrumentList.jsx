import InstrumentCard from "./InstrumentCard.jsx";
import styles from "./InstrumentList.module.css";

export default function InstrumentList({ instrumente, onToggle, onDelete }) {
  if (instrumente.length === 0) {
    return (
      <p className="empty" data-testid="empty">
        No instruments found in the catalog.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
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