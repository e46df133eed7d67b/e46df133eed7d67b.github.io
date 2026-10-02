/*
 * Reading preferences only. Edit page content in the HTML files and colors
 * in style.css. This script has no dependencies and needs no build step.
 * It loads in the head so the saved appearance is applied before the page paints.
 */
(() => {
  "use strict";

  const storageKey = "asmith-appearance";
  const sizeStorageKey = "asmith-text-size";
  const systemAppearance = window.matchMedia("(prefers-color-scheme: dark)");

  function readPreference() {
    try {
      const saved = localStorage.getItem(storageKey);
      return saved === "light" || saved === "dark" ? saved : "system";
    } catch {
      // Storage can be disabled, or unavailable in a direct-file preview.
      return "system";
    }
  }

  let preference = readPreference();
  let textSize = readTextSize();

  function readTextSize() {
    try {
      const saved = localStorage.getItem(sizeStorageKey);
      const size = Number(saved);
      return saved !== null && Number.isInteger(size) && size >= 75 && size <= 130
        ? size : 100;
    } catch {
      return 100;
    }
  }

  function applyTextSize() {
    document.documentElement.style.setProperty("--reading-scale", textSize / 100);
    const slider = document.getElementById("text-size");
    if (slider) {
      slider.value = textSize;
      // Preserve the native filled-track feedback with the explicit range styling.
      const position = (textSize - Number(slider.min)) / (Number(slider.max) - Number(slider.min));
      slider.style.setProperty("--range-position", position);
      slider.setAttribute("aria-valuetext", textSize + "% of default text size");
    }
  }

  function updateButton() {
    const button = document.getElementById("appearance-toggle");
    if (!button) return;
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    const label = "Switch to " + next + " mode";
    button.setAttribute("aria-label", label);
    button.title = label;
  }

  function applyPreference() {
    document.documentElement.dataset.theme = preference === "system"
      ? (systemAppearance.matches ? "dark" : "light")
      : preference;
    updateButton();
  }

  applyPreference();
  applyTextSize();

  document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("text-size");
    const controls = document.querySelector(".reading-controls");
    if (slider && controls) {
      applyTextSize();
      controls.hidden = false;
      slider.addEventListener("input", () => {
        textSize = Number(slider.value);
        applyTextSize();
        try {
          localStorage.setItem(sizeStorageKey, textSize);
        } catch {
          // The slider still works on this page if saving is unavailable.
        }
      });
    }

    const button = document.getElementById("appearance-toggle");
    if (!button) return;
    updateButton();
    button.hidden = false;

    // A native button supports mouse, touch, Enter, and Space.
    button.addEventListener("click", () => {
      preference = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      applyPreference();
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // Switching still works on this page if saving is unavailable.
      }
    });
  });

  // Follow the operating system until the visitor chooses an appearance.
  systemAppearance.addEventListener("change", () => {
    if (preference === "system") applyPreference();
  });

  // Keep a second open tab in sync with changes made in the first tab.
  window.addEventListener("storage", event => {
    if (event.key === storageKey || event.key === null) {
      preference = readPreference();
      applyPreference();
    }
    if (event.key === sizeStorageKey || event.key === null) {
      textSize = readTextSize();
      applyTextSize();
    }
  });
})();
