import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import InstrumentList from "../components/InstrumentList.jsx";
import InstrumentForm from "../components/InstrumentForm.jsx";
import {
  createInstrument,
  deleteInstrument,
  fetchInstrumente,
  updateInstrument,
} from "../api.js";
import styles from "./InstrumentePage.module.css";

export default function InstrumentePage() {
  const [instrumente, setInstrumente] = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        const data = await fetchInstrumente();
        if (!ignore) {
          setInstrumente(data);
        }
      } catch (err) {
        if (!ignore) {
          setError(err.message);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, [setInstrumente]);

  async function handleAdd(nouInstrument) {
    const creat = await createInstrument(nouInstrument);
    setInstrumente((prev) => [...prev, creat]);
  }

  async function handleToggle(id) {
    const instrument = instrumente.find((inst) => inst.id === id);
    try {
      const actualizat = await updateInstrument(id, {
        invatat: !instrument.invatat,
      });
      setInstrumente((prev) =>
        prev.map((inst) => (inst.id === id ? actualizat : inst))
      );
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteInstrument(id);
      setInstrumente((prev) => prev.filter((inst) => inst.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className={styles.grid}>
      <section className="panel">
        <h2>Add Instrument</h2>
        <InstrumentForm onAdd={handleAdd} />
      </section>

      <section className="panel">
        <h2>My Collection</h2>

        {loading && (
          <p className="info" data-testid="loading">
            Se încarcă catalogul muzical...
          </p>
        )}

        {error && (
          <p className="error" data-testid="error">
            Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
          </p>
        )}

        {!loading && (
          <InstrumentList
            instrumente={instrumente}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        )}
      </section>
    </div>
  );
}