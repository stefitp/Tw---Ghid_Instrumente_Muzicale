import { useState } from "react";
import { FAMILII } from "../constants.js";
import styles from "./InstrumentForm.module.css";

const NUME_MAX = 100;

export default function InstrumentForm({ onAdd }) {
  const [nume, setNume] = useState("");
  const [familie, setFamilie] = useState("coarde");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const text = nume.trim();
    if (text === "") return "Instrument name is required.";
    if (text.length > NUME_MAX) {
      return `Instrument name must be at most ${NUME_MAX} characters.`;
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);

    try {
      await onAdd({ nume: nume.trim(), familie, invatat: false });
      setNume("");
      setFamilie("coarde");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      noValidate
      data-testid="form"
    >
      <label>
        Instrument Name
        <input
          type="text"
          value={nume}
          onChange={(e) => setNume(e.target.value)}
          placeholder="Ex: Acoustic Guitar"
          maxLength={NUME_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      <label>
        Family
        <select
          value={familie}
          onChange={(e) => setFamilie(e.target.value)}
          data-testid="form-familie"
        >
          {FAMILII.map((f) => (
            <option key={f.value} value={f.value}>
              {f.label}
            </option>
          ))}
        </select>
      </label>

      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      <button type="submit" className="btn" disabled={trimite} data-testid="form-submit">
        {trimite ? "Saving..." : "Add Instrument"}
      </button>
    </form>
  );
}