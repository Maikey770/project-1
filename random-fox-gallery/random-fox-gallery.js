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
      darkMode: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.photos = [];
    this.loading = false;
    this.darkMode = true;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          max-width: 700px;
          margin: 40px auto;
          transition: background-color 0.3s, color 0.3s;
        }

        :host([dark-mode]) {
          background-color: #1e1e1e;
          color: white;
        }

        :host(:not([dark-mode])) {
          background-color: #f4f4f4;
          color: #333;
        }

        img {
          width: 100%;
          border-radius: 10px;
        }

        .btn-row {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 10px;
        }

        button {
          border: none;
          border-radius: 6px;
          padding: 8px 14px;
          cursor: pointer;
          font-weight: bold;
        }

        :host([dark-mode]) button {
          background: #ff8c1a;
          color: white;
        }

        :host(:not([dark-mode])) button {
          background: #007bff;
          color: white;
        }

        button:hover {
          opacity: 0.9;
        }

        .card {
          margin-bottom: 20px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          padding-bottom: 10px;
        }

        h2 {
          margin-bottom: 20px;
        }

        .author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .author img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
      `,
    ];
  }

  // Fetch gallery data from API
  async loadGallery() {
    try {
      this.loading = true;
      const res = await fetch("https://project-1-eight-steel.vercel.app/api/gallery");
      const data = await res.json();
      console.log("Fetched data:", data);
      this.photos = data;
    } catch (e) {
      console.error("Failed to load gallery", e);
    } finally {
      this.loading = false;
    }
  }

  // Like a photo and store count in localStorage
  like(id) {
    const likes = JSON.parse(localStorage.getItem("likes") || "{}");
    likes[id] = (likes[id] || 0) + 1;
    localStorage.setItem("likes", JSON.stringify(likes));
    this.requestUpdate();
  }

  // Dislike a photo and store count in localStorage
  dislike(id) {
    const dislikes = JSON.parse(localStorage.getItem("dislikes") || "{}");
    dislikes[id] = (dislikes[id] || 0) + 1;
    localStorage.setItem("dislikes", JSON.stringify(dislikes));
    this.requestUpdate();
  }

  // Get like count for a specific photo
  getLikes(id) {
    const likes = JSON.parse(localStorage.getItem("likes") || "{}");
    return likes[id] || 0;
  }

  // Get dislike count for a specific photo
  getDislikes(id) {
    const dislikes = JSON.parse(localStorage.getItem("dislikes") || "{}");
    return dislikes[id] || 0;
  }

  // Copy photo link to clipboard
  sharePhoto(photoUrl) {
    navigator.clipboard.writeText(photoUrl).then(() => {
      alert("Photo link copied to clipboard!");
    });
  }

  // Toggle between light and dark mode
  toggleMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      this.setAttribute("dark-mode", "");
      document.body.style.backgroundColor = "#121212";
    } else {
      this.removeAttribute("dark-mode");
      document.body.style.backgroundColor = "#ffffff";
    }
  }

  // Render the gallery layout
  render() {
    return html`
      <h2>Fox Gallery</h2>

      <div class="btn-row">
        <button @click="${this.loadGallery}">
          ${this.loading ? "Loading..." : "Load Gallery"}
        </button>
        <button @click="${this.toggleMode}">
          ${this.darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      ${this.photos.map(
        (p) => html`
          <div class="card">
            <img src="${p.thumbSrc}" alt="Fox photo by ${p.name}" />
            <p><strong>${p.name}</strong> — ${p.dateTaken}</p>

            <div class="author">
              <img src="${p.author.avatar}" alt="${p.author.name}" />
              <span>${p.author.name}</span>
            </div>

            <div class="btn-row">
              <button @click="${() => this.like(p.id)}">
                Like ${this.getLikes(p.id)}
              </button>
              <button @click="${() => this.dislike(p.id)}">
                Dislike ${this.getDislikes(p.id)}
              </button>
              <button @click="${() => this.sharePhoto(p.fullSrc)}">
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
