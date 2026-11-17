import { Link } from "react-router-dom";
import { ETICHETE_FAMILIE } from "../constants.js";
import styles from "./InstrumentCard.module.css";

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
  const familieClass = styles[`card_${instrument.familie}`] || "";

  return (
    <li
      className={`${styles.card} ${familieClass} ${instrument.invatat ? styles.done : ""}`}
      data-testid="item"
      data-id={instrument.id}
    >
      {/* Zona superioară: Avatar animat + Familie */}
      <div className={styles.cardTop}>
        <span className={styles.avatar} aria-hidden="true">
          {iconita}
        </span>
        <span className={styles.familyLabel}>
          {ETICHETE_FAMILIE[instrument.familie] || instrument.familie}
        </span>
      </div>

      {/* Zona principală: Checkbox + Link către pagina de detaliu */}
      <div className={styles.cardBody}>
        <div className={styles.main}>
          <input
            type="checkbox"
            checked={instrument.invatat}
            onChange={() => onToggle(instrument.id)}
            aria-label={`Mark ${instrument.nume}`}
            data-testid="item-toggle"
          />
          <Link
            to={`/instrumente/${instrument.id}`}
            className={styles.titleLink}
            data-testid="item-link"
          >
            {instrument.nume}
          </Link>
        </div>
      </div>

      {/* Zona inferioară: Badge, Status și Buton Delete */}
      <div className={styles.cardFooter}>
        <div className={styles.footerMeta}>
          <span className={`badge badge-${instrument.familie}`}>
            {ETICHETE_FAMILIE[instrument.familie] || instrument.familie}
          </span>
          <span className={styles.status}>
            {instrument.invatat ? "✓ Learned" : "To Learn"}
          </span>
        </div>

        <button
          type="button"
          className="btn-danger"
          onClick={() => onDelete(instrument.id)}
          aria-label={`Delete ${instrument.nume}`}
          data-testid="item-delete"
        >
          Delete
        </button>
      </div>
    </li>
  );
}