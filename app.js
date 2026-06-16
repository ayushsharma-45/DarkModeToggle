const VERSION = "1.0.0";

function downloadExtension() {
  if (window.DarkModeToggleDownload && typeof window.DarkModeToggleDownload.downloadExtensionZip === "function") {
    window.DarkModeToggleDownload.downloadExtensionZip();
    return;
  }

  window.alert("The download file is not available right now.");
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

function featureMarkup() {
  return FEATURES.map((feature) => `
          <article class="feature-card">
            <div class="feature-card__icon" aria-hidden="true">${feature.icon}</div>
            <h3>${feature.title}</h3>
            <p>${feature.text}</p>
          </article>
        `).join("");
}

function stepsMarkup() {
  return STEPS.map((step, index) => `
          <article class="step-card">
            <div class="step-card__num">${index + 1}</div>
            <h3>${step.title}</h3>
            <p>${step.text}</p>
          </article>
        `).join("");
}

function renderApp() {
  const root = document.getElementById("root");

  if (!root) {
    throw new Error('Missing root element: expected <div id="root"></div>.');
  }

  root.innerHTML = `
    <header class="site-header">
      <div class="container site-header__inner">
        <a href="#" class="logo">
          <span class="logo__icon" aria-hidden="true">🌙</span>
          Dark Mode Toggle
        </a>
        <nav class="nav">
          <a href="#features">Features</a>
          <a href="#install">Install</a>
          <a href="#download">Download</a>
        </nav>
      </div>
    </header>

    <main>
      <section class="hero container">
        <div>
          <div class="hero__badge">Free Chrome Extension · v${VERSION}</div>
          <h1 class="hero__title">
            Turn any website <span>dark</span> with one click
          </h1>
          <p class="hero__text">
            Dark Mode Toggle adds a simple button to Chrome so you can force dark mode
            on sites that do not offer it. Your preference is saved for each website.
          </p>
          <div class="hero__actions">
            <button type="button" class="btn btn--primary" data-download-button="hero">
              ⬇ Download Extension
            </button>
            <a href="#install" class="btn btn--ghost">
              How to install
            </a>
          </div>
          <div class="hero__meta">
            <span>
              <strong>Free</strong> — no store fee required
            </span>
            <span>
              Shortcut: <strong>Alt + Shift + D</strong>
            </span>
          </div>
        </div>

        <div class="hero__preview">
          <div class="preview-window">
            <div class="preview-window__bar">
              <span class="dot dot--red"></span>
              <span class="dot dot--yellow"></span>
              <span class="dot dot--green"></span>
              <span class="preview-window__url">example.com/article</span>
            </div>
            <div class="preview-window__body">
              <div class="preview-card">
                <div class="preview-card__row">
                  <div>
                    <p class="preview-card__title">Dark Mode Toggle</p>
                    <p class="preview-card__sub">example.com</p>
                  </div>
                  <div class="toggle-demo" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="features">
        <div class="container">
          <div class="section__head">
            <p class="section__eyebrow">Features</p>
            <h2 class="section__title">Simple, fast, and lightweight</h2>
            <p class="section__text">
              Built for everyday browsing on news sites, docs, blogs, and any page without
              a built-in dark theme.
            </p>
          </div>
          <div class="features">
${featureMarkup()}
          </div>
        </div>
      </section>

      <section class="section" id="install">
        <div class="container">
          <div class="section__head">
            <p class="section__eyebrow">Install guide</p>
            <h2 class="section__title">Get started in under a minute</h2>
            <p class="section__text">
              This installs locally in Chrome. No Chrome Web Store account or payment
              needed.
            </p>
          </div>
          <div class="steps">
${stepsMarkup()}
          </div>
        </div>
      </section>

      <section class="section" id="download">
        <div class="container">
          <div class="download-panel">
            <div class="download-panel__text">
              <h2>Ready to try it?</h2>
              <p>
                Download the latest version of Dark Mode Toggle as a zip file, unzip it,
                and load it in Chrome using Developer mode.
              </p>
              <p class="download-panel__note">
                Works in Chrome, Edge, Brave, and other Chromium browsers.
              </p>
            </div>
            <button type="button" class="btn btn--primary" data-download-button="footer">
              Download .zip
            </button>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container">
        Dark Mode Toggle · Free open extension · Version ${VERSION}
      </div>
    </footer>
  `;

  root.querySelectorAll("[data-download-button]").forEach((button) => {
    button.addEventListener("click", () => {
      const originalLabel = button.textContent;
      button.textContent = "Downloading...";
      button.disabled = true;

      downloadExtension();

      window.setTimeout(() => {
        button.textContent = originalLabel;
        button.disabled = false;
      }, 1200);
    });
  });
}

renderApp();
