import { useState } from "react";

const FAMILII = [
  { value: "coarde", label: "Strings (Coarde)" },
  { value: "suflat", label: "Winds (Suflat)" },
  { value: "percutie", label: "Percussion (Percuție)" },
];

const NUME_MAX = 100;

export default function InstrumentForm({ onAdd }) {
  const [nume, setNume] = useState("");
  const [familie, setFamilie] = useState("coarde");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const text = nume.trim();
    if (text === "") return "Numele instrumentului este obligatoriu.";
    if (text.length > NUME_MAX) {
      return `Numele are maximum ${NUME_MAX} de caractere.`;
    }
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault(); // oprește reîncărcarea paginii
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
      className="instrument-form"
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

      <button type="submit" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă instrument"}
      </button>
    </form>
  );
}