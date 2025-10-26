/**
 * Copyright 2025 Maikey770
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * random-fox-gallery component
 */
export class RandomFoxGallery extends DDDSuper(LitElement) {

  // Define custom element tag
  static get tag() {
    return "random-fox-gallery";
  }

  // Reactive properties
  static get properties() {
    return {
      foxes: { type: Array },   // store fox image data
      loading: { type: Boolean } // show loading state
    };
  }

  // Constructor: set defaults
  constructor() {
    super();
    this.foxes = [];
    this.loading = false;
  }

  // Component styles
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background-color: var(--ddd-theme-default-surface);
          color: var(--ddd-theme-default-on-surface);
          border-radius: 16px;
          padding: 16px;
          max-width: 900px;
          margin: 20px auto;
        }
        h2 {
          text-align: center;
          font-size: 1.4rem;
          margin-bottom: 12px;
        }
        button {
          display: block;
          margin: 0 auto 16px;
          padding: 8px 16px;
          border: none;
          border-radius: 8px;
          background-color: var(--ddd-theme-primary);
          color: white;
          cursor: pointer;
          font-size: 1rem;
        }
        button:hover {
          opacity: 0.9;
        }
        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 12px;
        }
        .card {
          background: var(--ddd-theme-default-card);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }
        .card:hover {
          transform: scale(1.03);
        }
        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .link {
          display: block;
          text-align: center;
          font-size: 0.9rem;
          padding: 6px;
          color: var(--ddd-theme-primary);
        }
      `,
    ];
  }

  // Fetch one random fox image from API
  async getFox() {
    this.loading = true;
    try {
      const res = await fetch("https://randomfox.ca/floof/");
      const data = await res.json();
      this.foxes = [...this.foxes, data]; // add new fox to array
    } catch (e) {
      console.error("Error fetching fox:", e);
    } finally {
      this.loading = false; // reset loading state
    }
  }

  // Render component UI
  render() {
    return html`
      <h2>Random Fox Gallery</h2>
      <button @click="${this.getFox}">
        ${this.loading ? "Loading..." : "Get a New Fox"}
      </button>
      <div class="gallery">
        ${this.foxes.map(
          (f) => html`
            <div class="card">
              <img src="${f.image}" alt="fox" />
              <a class="link" href="${f.link}" target="_blank">View Source</a>
            </div>
          `
        )}
      </div>
    `;
  }
}

globalThis.customElements.define(RandomFoxGallery.tag, RandomFoxGallery);
