/**
 * Handles downloading the extension zip from the website.
 */
const EXTENSION_ZIP = {
  url: "downloads/dark-mode-toggle.zip",
  filename: "dark-mode-toggle.zip"
};

function downloadExtensionZip() {
  const link = document.createElement("a");
  link.href = EXTENSION_ZIP.url;
  link.download = EXTENSION_ZIP.filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

window.DarkModeToggleDownload = {
  downloadExtensionZip,
  EXTENSION_ZIP
};
