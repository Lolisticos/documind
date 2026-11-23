import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3.75h6.8L18.25 8v12.25H7V3.75Z" />
      <path d="M13.5 3.75V8h4.75M9.75 12h5.5M9.75 15h5.5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}

function App() {
  return (
    <main>
      <nav aria-label="Primary navigation">
        <a className="brand" href="/">
          <span className="brand-mark">
            <DocumentIcon />
          </span>
          DocuMind
        </a>
        <span className="status">
          <span className="status-dot" />
          Workspace ready
        </span>
      </nav>

      <section className="hero">
        <div className="eyebrow">Document intelligence, clarified</div>
        <h1>Turn dense documents into decisions.</h1>
        <p className="intro">
          DocuMind extracts the signal from complex files, so your team can
          review faster, understand more, and move forward with confidence.
        </p>
        <button type="button">
          Explore your workspace
          <ArrowIcon />
        </button>
      </section>

      <section className="preview" aria-label="Document analysis preview">
        <div className="document-card">
          <div className="document-header">
            <div>
              <span className="label">Active document</span>
              <h2>Quarterly research brief</h2>
            </div>
            <span className="file-type">PDF</span>
          </div>
          <div className="document-lines" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="insight-card">
          <span className="label">Analysis complete</span>
          <div className="score-row">
            <strong>92%</strong>
            <span>confidence</span>
          </div>
          <div className="meter">
            <span />
          </div>
          <p>
            Three key findings and two recommended actions were identified.
          </p>
        </div>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
