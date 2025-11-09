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
      theme: { type: String },
    };
  }

  constructor() {
    super();
    this.photos = [];
    this.loading = false;
    this.theme = "dark";
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
          color: white;
          border: none;
          border-radius: 8px;
          padding: 8px 14px;
          cursor: pointer;
          margin: 6px;
        }

        button:hover {
          opacity: 0.9;
        }

        .card {
          margin-bottom: 20px;
          background: var(--card-bg, #2a2a2a);
          border-radius: 10px;
          padding: 10px;
        }

        .btn-row {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
        }

        .top-buttons {
          text-align: center;
          margin-bottom: 20px;
        }
      `,
    ];
  }

  // Load gallery photos
  async loadGallery() {
    this.loading = true;
    try {
      const res = await fetch("/api/gallery");
      this.photos = await res.json();
    } catch (e) {
      console.error("Error loading gallery:", e);
    }
    this.loading = false;
  }

  // Like photo
  like(id) {
    const likes = JSON.parse(localStorage.getItem("likes") || "{}");
    likes[id] = (likes[id] || 0) + 1;
    localStorage.setItem("likes", JSON.stringify(likes));
    this.requestUpdate();
  }

  // Dislike photo
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

  // Toggle dark / light mode
  toggleTheme() {
    if (this.theme === "dark") {
      this.theme = "light";
      document.documentElement.style.setProperty("--bg-color", "#f5f5f5");
      document.documentElement.style.setProperty("--text-color", "#000");
      document.documentElement.style.setProperty("--card-bg", "#ffffff");
      document.documentElement.style.setProperty("--button-bg", "#007bff"); // blue
    } else {
      this.theme = "dark";
      document.documentElement.style.setProperty("--bg-color", "#1e1e1e");
      document.documentElement.style.setProperty("--text-color", "#fff");
      document.documentElement.style.setProperty("--card-bg", "#2a2a2a");
      document.documentElement.style.setProperty("--button-bg", "#ff8c1a"); // orange
    }
    this.requestUpdate();
  }

  // Share this specific photo URL
  sharePhoto(photoUrl) {
    navigator.clipboard.writeText(photoUrl);
    alert("Image link copied to clipboard!");
  }

  render() {
    return html`
      <h2>Fox Gallery</h2>

      <div class="top-buttons">
        <button
          style="background-color: var(--button-bg, #ff8c1a)"
          @click="${this.loadGallery}"
        >
          ${this.loading ? "Loading..." : "Load Gallery"}
        </button>
        <button
          style="background-color: var(--button-bg, #ff8c1a)"
          @click="${this.toggleTheme}"
        >
          Switch to ${this.theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>

      ${this.photos.map(
        (p) => html`
          <div class="card">
            <img src="${p.photo}" alt="${p.author}" />
            <p>${p.author}</p>
            <div class="btn-row">
              <button
                style="background-color: var(--button-bg, #ff8c1a)"
                @click="${() => this.like(p.id)}"
              >
                Like ${this.getLikes(p.id)}
              </button>
              <button
                style="background-color: var(--button-bg, #ff8c1a)"
                @click="${() => this.dislike(p.id)}"
              >
                Dislike ${this.getDislikes(p.id)}
              </button>
              <button
                style="background-color: var(--button-bg, #ff8c1a)"
                @click="${() => this.sharePhoto(p.photo)}"
              >
                Share
              </button>
            </div>
          </div>
        `
      )}
    `;
  }
}

customElements.define(RandomFoxGallery.tag, RandomFoxGallery);
