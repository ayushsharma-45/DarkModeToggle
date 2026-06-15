const { useState } = React;

const VERSION = "1.0.0";

function downloadExtension() {
  window.DarkModeToggleDownload.downloadExtensionZip();
}

function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a href="#" className="logo">
          <span className="logo__icon" aria-hidden="true">
            🌙
          </span>
          Dark Mode Toggle
        </a>
        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#install">Install</a>
          <a href="#download">Download</a>
        </nav>
      </div>
    </header>
  );
}

function HeroPreview() {
  return (
    <div className="hero__preview">
      <div className="preview-window">
        <div className="preview-window__bar">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
          <span className="preview-window__url">example.com/article</span>
        </div>
        <div className="preview-window__body">
          <div className="preview-card">
            <div className="preview-card__row">
              <div>
                <p className="preview-card__title">Dark Mode Toggle</p>
                <p className="preview-card__sub">example.com</p>
              </div>
              <div className="toggle-demo" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    downloadExtension();
    window.setTimeout(() => setDownloading(false), 1200);
  };

  return (
    <section className="hero container">
      <div>
        <div className="hero__badge">Free Chrome Extension · v{VERSION}</div>
        <h1 className="hero__title">
          Turn any website <span>dark</span> with one click
        </h1>
        <p className="hero__text">
          Dark Mode Toggle adds a simple button to Chrome so you can force dark mode
          on sites that do not offer it. Your preference is saved for each website.
        </p>
        <div className="hero__actions">
          <button
            type="button"
            className="btn btn--primary"
            onClick={handleDownload}
          >
            {downloading ? "Downloading..." : "⬇ Download Extension"}
          </button>
          <a href="#install" className="btn btn--ghost">
            How to install
          </a>
        </div>
        <div className="hero__meta">
          <span>
            <strong>Free</strong> — no store fee required
          </span>
          <span>
            Shortcut: <strong>Alt + Shift + D</strong>
          </span>
        </div>
      </div>
      <HeroPreview />
    </section>
  );
}

const FEATURES = [
  {
    icon: "🌓",
    title: "One-click toggle",
    text: "Open the popup and switch dark mode on or off instantly for the current tab."
  },
  {
    icon: "💾",
    title: "Remembers each site",
    text: "Your choice is saved per domain, so favorite sites stay dark when you return."
  },
  {
    icon: "⌨️",
    title: "Keyboard shortcut",
    text: "Press Alt + Shift + D to toggle dark mode without opening the popup."
  }
];

function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Features</p>
          <h2 className="section__title">Simple, fast, and lightweight</h2>
          <p className="section__text">
            Built for everyday browsing on news sites, docs, blogs, and any page without
            a built-in dark theme.
          </p>
        </div>
        <div className="features">
          {FEATURES.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-card__icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    title: "Download the zip",
    text: "Click the download button to get dark-mode-toggle.zip on your computer."
  },
  {
    title: "Unzip the folder",
    text: "Extract the zip file. You should see manifest.json and other extension files."
  },
  {
    title: "Open chrome://extensions",
    text: "In Chrome, go to Extensions and turn on Developer mode."
  },
  {
    title: "Load unpacked",
    text: "Click Load unpacked and select the unzipped dark-mode-toggle folder."
  }
];

function InstallSteps() {
  return (
    <section className="section" id="install">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Install guide</p>
          <h2 className="section__title">Get started in under a minute</h2>
          <p className="section__text">
            This installs locally in Chrome. No Chrome Web Store account or payment
            needed.
          </p>
        </div>
        <div className="steps">
          {STEPS.map((step, index) => (
            <article className="step-card" key={step.title}>
              <div className="step-card__num">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    downloadExtension();
    window.setTimeout(() => setDownloading(false), 1200);
  };

  return (
    <section className="section" id="download">
      <div className="container">
        <div className="download-panel">
          <div className="download-panel__text">
            <h2>Ready to try it?</h2>
            <p>
              Download the latest version of Dark Mode Toggle as a zip file, unzip it,
              and load it in Chrome using Developer mode.
            </p>
            <p className="download-panel__note">
              Works in Chrome, Edge, Brave, and other Chromium browsers.
            </p>
          </div>
          <button
            type="button"
            className="btn btn--primary"
            onClick={handleDownload}
          >
            {downloading ? "Downloading..." : "Download .zip"}
          </button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        Dark Mode Toggle · Free open extension · Version {VERSION}
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <InstallSteps />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
