import InstrumentList from "./components/InstrumentList.jsx";

const instrumente = [
  { id: 1, nume: "Classical Guitar", invatat: false, familie: "coarde" },
  { id: 2, nume: "Acoustic Piano", invatat: true, familie: "coarde" },
  { id: 3, nume: "Alto Saxophone", invatat: false, familie: "suflat" }
];

function playNote(freq) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  } catch {
    // Audio context fallback
  }
}

export default function App() {
  const total = instrumente.length;
  const learned = instrumente.filter((item) => item.invatat).length;
  const toLearn = total - learned;
  const progressPercent = total > 0 ? Math.round((learned / total) * 100) : 0;

  const pianoKeys = [
    { note: "C", freq: 261.63 },
    { note: "D", freq: 293.66 },
    { note: "E", freq: 329.63 },
    { note: "F", freq: 349.23 },
    { note: "G", freq: 392.00 },
    { note: "A", freq: 440.00 },
    { note: "B", freq: 493.88 }
  ];

  return (
    <>
      <header className="app-header split-header">
        <div className="floating-notes" aria-hidden="true">
          <span className="f-note fn-1">♪</span>
          <span className="f-note fn-2">♫</span>
          <span className="f-note fn-3">♬</span>
          <span className="f-note fn-4">♩</span>
          <span className="f-note fn-5">𝄞</span>
        </div>

        <div className="header-grid">
          {/* Left Column: Branding, Title, Interactive Keyboard */}
          <div className="header-left">
            <div className="header-top-row">
              <span className="brand-logo" aria-hidden="true">𝄞</span>
              <span className="badge-subtext">ACOUSTIC FREQUENCY</span>
            </div>

            <h1 className="crazy-title">
              Music<span>Guide</span>
            </h1>

            <p className="header-subtitle">
              Explore diverse instrument families, monitor your daily practice goals, and test acoustic notes in real-time.
            </p>

            <div className="mini-piano">
              <span className="piano-hint">Play a quick note:</span>
              <div className="piano-keys">
                {pianoKeys.map((k) => (
                  <button
                    key={k.note}
                    type="button"
                    className="piano-key"
                    onClick={() => playNote(k.freq)}
                    title={`Play ${k.note}`}
                  >
                    {k.note}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Studio Console Widget */}
          <div className="header-right">
            <div className="studio-widget">
              <div className="widget-top">
                <span className="widget-label">LIVE SESSION MONITOR</span>
                <div className="sound-wave sound-wave-crazy" aria-hidden="true">
                  <span className="bar bar-1"></span>
                  <span className="bar bar-2"></span>
                  <span className="bar bar-3"></span>
                  <span className="bar bar-4"></span>
                  <span className="bar bar-5"></span>
                  <span className="bar bar-6"></span>
                </div>
              </div>

              <div className="stats-grid">
                <div className="stat-card">
                  <span className="stat-value">{total}</span>
                  <span className="stat-label">Total Tracks</span>
                </div>
                <div className="stat-card stat-active">
                  <span className="stat-value">{toLearn}</span>
                  <span className="stat-label">In Practice</span>
                </div>
                <div className="stat-card stat-done">
                  <span className="stat-value">{learned}</span>
                  <span className="stat-label">Mastered</span>
                </div>
              </div>

              <div className="progress-container">
                <div className="progress-header">
                  <span>Mastery Level</span>
                  <span className="progress-percent">{progressPercent}%</span>
                </div>
                <div className="progress-track">
                  <div
                    className="crazy-progress-fill"
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>

              <div className="app-count">
                {total} instruments, of which {toLearn} to learn
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="panel">
          <h2>My Collection</h2>
          <InstrumentList instrumente={instrumente} />
        </section>
      </main>
    </>
  );
}