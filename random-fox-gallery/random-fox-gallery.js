// Simple gallery that loads photos from API
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class RandomFoxGallery extends DDDSuper(LitElement) {
  static get tag() {
    return "random-fox-gallery";
  }

  static get properties() {
    return {
      photos: { type: Array },
      loading: { type: Boolean },
      darkMode: { type: Boolean }, // light/dark mode toggle
    };
  }

  constructor() {
    super();
    this.photos = [];
    this.loading = false;
    this.darkMode = true; // default mode
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background: var(--bg-color, #1e1e1e);
          color: var(--text-color, white);
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          max-width: 700px;
          margin: 40px auto;
          transition: background 0.3s, color 0.3s;
        }
        img {
          width: 100%;
          border-radius: 10px;
        }
        button {
          background: var(--accent-color, #ff8c1a);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 8px 14px;
          cursor: pointer;
          margin: 10px;
        }
        button:hover {
          opacity: 0.9;
        }
        .card {
          margin-bottom: 20px;
        }
        .controls {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }
      `,
    ];
  }

  // Fetch data from the API
  async loadGallery() {
    this.loading = true;
    try {
      const res = await fetch("/api/gallery");
      if (!res.ok) throw new Error("Failed to fetch");
      this.photos = await res.json();
    } catch (err) {
      console.error(err);
      alert("Failed to load gallery. Please try again later.");
    } finally {
      this.loading = false;
    }
  }

  // Like a photo and save to localStorage
  like(id) {
    const likes = JSON.parse(localStorage.getItem("likes") || "{}");
    likes[id] = (likes[id] || 0) + 1;
    localStorage.setItem("likes", JSON.stringify(likes));
    this.requestUpdate();
  }

  // Dislike a photo and save to localStorage
  dislike(id) {
    const dislikes = JSON.parse(localStorage.getItem("dislikes") || "{}");
    dislikes[id] = (dislikes[id] || 0) + 1;
    localStorage.setItem("dislikes", JSON.stringify(dislikes));
    this.requestUpdate();
  }

  // Get like count
  getLikes(id) {
    const likes = JSON.parse(localStorage.getItem("likes") || "{}");
    return likes[id] || 0;
  }

  // Get dislike count
  getDislikes(id) {
    const dislikes = JSON.parse(localStorage.getItem("dislikes") || "{}");
    return dislikes[id] || 0;
  }

  // Toggle light/dark mode
  toggleMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.documentElement.style.setProperty("--bg-color", "#1e1e1e");
      document.documentElement.style.setProperty("--text-color", "white");
      document.documentElement.style.setProperty("--accent-color", "#ff8c1a");
    } else {
      document.documentElement.style.setProperty("--bg-color", "#f5f5f5");
      document.documentElement.style.setProperty("--text-color", "#1e1e1e");
      document.documentElement.style.setProperty("--accent-color", "#0078d7");
    }
  }

  // Copy current page URL to clipboard
  shareLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("Link copied to clipboard.");
    });
  }

  render() {
    return html`
      <h2>Fox Gallery</h2>
      <div class="controls">
        <button @click="${this.loadGallery}">
          ${this.loading ? "Loading..." : "Load Gallery"}
        </button>
        <button @click="${this.toggleMode}">
          ${this.darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        <button @click="${this.shareLink}">Share</button>
      </div>

      ${this.photos.map(
        (p) => html`
          <div class="card">
            <img src="${p.photo}" alt="${p.author}" />
            <p>${p.author}</p>
            <div class="controls">
              <button @click="${() => this.like(p.id)}">
                Like ${this.getLikes(p.id)}
              </button>
              <button @click="${() => this.dislike(p.id)}">
                Dislike ${this.getDislikes(p.id)}
              </button>
            </div>
          </div>
        `
      )}
    `;
  }
}

customElements.define(RandomFoxGallery.tag, RandomFoxGallery);
