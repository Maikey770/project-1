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
          background: var(--bg-color, #121212);
          color: var(--text-color, #fff);
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          max-width: 700px;
          margin: 40px auto;
          transition: background 0.4s ease, color 0.4s ease;
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
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        button:hover {
          opacity: 0.9;
        }

        .card {
          margin-bottom: 20px;
          background: var(--card-bg, #1e1e1e);
          border-radius: 10px;
          padding: 10px;
        }

        .btn-row {
          display: flex;
          justify-content: space-around;
          margin-top: 10px;
          flex-wrap: wrap;
        }

        .top-buttons {
          text-align: center;
          margin-bottom: 20px;
        }
      `,
    ];
  }

  // Load gallery from API
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

  // Like
  like(id) {
    const likes = JSON.parse(localStorage.getItem("likes") || "{}");
    likes[id] = (likes[id] || 0) + 1;
    localStorage.setItem("likes", JSON.stringify(likes));
    this.requestUpdate();
  }

  // Dislike
  dislike(id) {
    const dislikes = JSON.parse(localStorage.getItem("dislikes") || "{}");
    dislikes[id] = (dislikes[id] || 0) + 1;
    localStorage.setItem("dislikes", JSON.stringify(dislikes));
    this.requestUpdate();
  }

  // Super Like
  superLike(id) {
    const superLikes = JSON.parse(localStorage.getItem("superLikes") || "{}");
    superLikes[id] = (superLikes[id] || 0) + 1;
    localStorage.setItem("superLikes", JSON.stringify(superLikes));
    this.requestUpdate();
  }

  // Counts
  getLikes(id) {
    const likes = JSON.parse(localStorage.getItem("likes") || "{}");
    return likes[id] || 0;
  }

  getDislikes(id) {
    const dislikes = JSON.parse(localStorage.getItem("dislikes") || "{}");
    return dislikes[id] || 0;
  }

  getSuperLikes(id) {
    const superLikes = JSON.parse(localStorage.getItem("superLikes") || "{}");
    return superLikes[id] || 0;
  }

  // Theme toggle
  toggleTheme() {
    if (this.theme === "dark") {
      this.theme = "light";
      document.documentElement.style.setProperty("--bg-color", "#ffffff");
      document.documentElement.style.setProperty("--text-color", "#000000");
      document.documentElement.style.setProperty("--card-bg", "#f8f8f8");
      document.documentElement.style.setProperty("--button-bg", "#007bff");
      document.body.style.backgroundColor = "#ffffff";
      document.querySelector("html").style.backgroundColor = "#ffffff";
    } else {
      this.theme = "dark";
      document.documentElement.style.setProperty("--bg-color", "#121212");
      document.documentElement.style.setProperty("--text-color", "#ffffff");
      document.documentElement.style.setProperty("--card-bg", "#1e1e1e");
      document.documentElement.style.setProperty("--button-bg", "#ff8c1a");
      document.body.style.backgroundColor = "#121212";
      document.querySelector("html").style.backgroundColor = "#121212";
    }
    this.requestUpdate();
  }

  // Share a specific image
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
                style="background-color: purple"
                @click="${() => this.superLike(p.id)}"
              >
                V_V ${this.getSuperLikes(p.id)}
              </button>
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
