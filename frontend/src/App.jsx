//date de test 
const instrumente = [
  { id: 1, nume: "Chitară clasică", invatat: false, familie: "coarde" },
  { id: 2, nume: "Pian acustic", invatat: true, familie: "coarde" },
  { id: 3, nume: "Saxofon alto", invatat: false, familie: "suflat" }
];

export default function App() {
  // nr de instrumente active 
  const deInvatat = instrumente.filter((item) => !item.invatat).length;

  return (
    <>
      <header className="app-header">
        <h1>MusicGuide</h1>
        <p>Ghidul tău complet de explorat și învățat instrumente muzicale.</p>
        <p className="app-count">
          {instrumente.length} instrumente, dintre care {deInvatat} de învățat
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Instrumentele mele</h2>
          {/* date brute sub forma JSON (temporar) */}
          <pre>{JSON.stringify(instrumente, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}