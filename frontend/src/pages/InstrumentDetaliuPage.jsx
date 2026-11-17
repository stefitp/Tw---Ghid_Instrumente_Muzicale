import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchInstrument } from "../api.js";
import { ETICHETE_FAMILIE } from "../constants.js";
import styles from "./InstrumentDetaliuPage.module.css";

function getIconita(instrument) {
  const numeMic = instrument.nume.toLowerCase();
  if (numeMic.includes("piano") || numeMic.includes("pian")) return "🎹";
  if (numeMic.includes("guitar") || numeMic.includes("chitar")) return "🎸";
  if (numeMic.includes("violin") || numeMic.includes("vioar")) return "🎻";
  if (instrument.familie === "suflat") return "🎷";
  if (instrument.familie === "percutie") return "🥁";
  return "🎵";
}

export default function InstrumentDetaliuPage() {
  const { id } = useParams();
  const [instrument, setInstrument] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetchInstrument(id)
      .then((data) => {
        if (!ignore) {
          setInstrument(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) {
          setError(err.message);
        }
      })
      .finally(() => {
        if (!ignore) {
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă detaliile instrumentului...
      </p>
    );
  }

  if (error) {
    return (
      <section className="panel">
        <p className="error" data-testid="error">
          Instrumentul nu a putut fi încărcat: {error}
        </p>
        <Link to="/" className={styles.backLink}>
          &larr; Back to Instruments
        </Link>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.backLink}>
        &larr; Back to Instruments
      </Link>

      <div className={styles.headerRow}>
        <span className={styles.bigAvatar} aria-hidden="true">
          {getIconita(instrument)}
        </span>
        <div>
          <h2
            className={instrument.invatat ? styles.doneTitle : styles.title}
            data-testid="detail-title"
          >
            {instrument.nume}
          </h2>
          <span className={`badge badge-${instrument.familie}`}>
            {ETICHETE_FAMILIE[instrument.familie] || instrument.familie}
          </span>
        </div>
      </div>

      <dl className={styles.fields}>
        <dt>Family</dt>
        <dd>{ETICHETE_FAMILIE[instrument.familie] || instrument.familie}</dd>

        <dt>Practice Status</dt>
        <dd>{instrument.invatat ? "✓ Mastered (Learned)" : "In Practice (To Learn)"}</dd>

        <dt>Catalog ID</dt>
        <dd>#{instrument.id}</dd>
      </dl>
    </section>
  );
}