import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { fetchInstrumente } from "../api.js";
import styles from "./Layout.module.css";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

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
    // Fallback audio context
  }
}

const PIANO_KEYS = [
  { note: "C", freq: 261.63 },
  { note: "D", freq: 293.66 },
  { note: "E", freq: 329.63 },
  { note: "F", freq: 349.23 },
  { note: "G", freq: 392.0 },
  { note: "A", freq: 440.0 },
  { note: "B", freq: 493.88 },
];

export default function Layout() {
  const [tema, setTema] = useState(temaInitiala);
  const [instrumente, setInstrumente] = useState([]);

  useEffect(() => {
    let ignore = false;
    fetchInstrumente()
      .then((data) => {
        if (!ignore) setInstrumente(data);
      })
      .catch(() => {});
    return () => {
      ignore = true;
    };
  }, []);

  function navClass({ isActive }) {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
  }

  function handleTema() {
    const nouaTema = tema === "dark" ? "light" : "dark";
    setTema(nouaTema);
    document.documentElement.dataset.theme = nouaTema;
  }

  const total = instrumente.length;
  const learned = instrumente.filter((item) => item.invatat).length;
  const toLearn = total - learned;
  const progressPercent = total > 0 ? Math.round((learned / total) * 100) : 0;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.topBar}>
          <div className={styles.brand}>
            <span className={styles.brandLogo} aria-hidden="true">𝄞</span>
            <span className={styles.brandName}>MusicGuide</span>
          </div>

          <div className={styles.navActions}>
            <nav className={styles.nav} data-testid="nav">
              <NavLink to="/" end className={navClass}>
                Instruments
              </NavLink>
              <NavLink to="/despre" className={navClass}>
                About
              </NavLink>
            </nav>

            <button
              type="button"
              className={styles.themeToggle}
              onClick={handleTema}
              aria-pressed={tema === "dark"}
            >
              {tema === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>

        <div className={styles.floatingNotes} aria-hidden="true">
          <span className={`${styles.fNote} ${styles.fn1}`}>♪</span>
          <span className={`${styles.fNote} ${styles.fn2}`}>♫</span>
          <span className={`${styles.fNote} ${styles.fn3}`}>♬</span>
          <span className={`${styles.fNote} ${styles.fn4}`}>♩</span>
          <span className={`${styles.fNote} ${styles.fn5}`}>𝄞</span>
        </div>

        <div className={styles.headerGrid}>
          <div className={styles.headerLeft}>
            <span className={styles.badgeSubtext}>ACOUSTIC FREQUENCY</span>
            <h1 className={styles.crazyTitle}>
              Music<span>Guide</span>
            </h1>
            <p className={styles.headerSubtitle}>
              Explore diverse instrument families, monitor your daily practice goals, and test acoustic notes in real-time.
            </p>

            <div className={styles.miniPiano}>
              <span className={styles.pianoHint}>Play a quick note:</span>
              <div className={styles.pianoKeys}>
                {PIANO_KEYS.map((k) => (
                  <button
                    key={k.note}
                    type="button"
                    className={styles.pianoKey}
                    onClick={() => playNote(k.freq)}
                    title={`Play ${k.note}`}
                  >
                    {k.note}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.studioWidget}>
              <div className={styles.widgetTop}>
                <span className={styles.widgetLabel}>LIVE SESSION MONITOR</span>
                <div className={styles.soundWave} aria-hidden="true">
                  <span className={`${styles.bar} ${styles.bar1}`}></span>
                  <span className={`${styles.bar} ${styles.bar2}`}></span>
                  <span className={`${styles.bar} ${styles.bar3}`}></span>
                  <span className={`${styles.bar} ${styles.bar4}`}></span>
                  <span className={`${styles.bar} ${styles.bar5}`}></span>
                  <span className={`${styles.bar} ${styles.bar6}`}></span>
                </div>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <span className={styles.statValue}>{total}</span>
                  <span className={styles.statLabel}>Total Tracks</span>
                </div>
                <div className={`${styles.statCard} ${styles.statActive}`}>
                  <span className={styles.statValue}>{toLearn}</span>
                  <span className={styles.statLabel}>In Practice</span>
                </div>
                <div className={`${styles.statCard} ${styles.statDone}`}>
                  <span className={styles.statValue}>{learned}</span>
                  <span className={styles.statLabel}>Mastered</span>
                </div>
              </div>

              <div className={styles.progressContainer}>
                <div className={styles.progressHeader}>
                  <span>Mastery Level</span>
                  <span className={styles.progressPercent}>{progressPercent}%</span>
                </div>
                <div className={styles.progressTrack}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${progressPercent}%` }}
                  ></div>
                </div>
              </div>

              <div className={styles.appCount}>
                {total} instruments, of which {toLearn} to learn
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <Outlet context={[instrumente, setInstrumente]} />
      </main>

      <footer className={styles.footer}>
        Proiect Tehnologii Web &bull; MusicGuide
      </footer>
    </>
  );
}