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
      visibleCount: { type: Number },
      loading: { type: Boolean },
      darkMode: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.photos = [];
    this.visibleCount = 10; // only show 10 at first
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
          max-width: 1000px;
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

        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
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
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          padding: 10px;
        }

        h2 {
          margin-bottom: 20px;
        }
      `,
    ];
  }

  // Fetch data from API
  async loadGallery() {
    try {
      this.loading = true;
      const res = await fetch("https://project-1-eight-steel.vercel.app/api/gallery");
      const data = await res.json();
      this.photos = data;
    } catch (e) {
      console.error("Failed to load gallery", e);
    } finally {
      this.loading = false;
    }
  }

  loadMore() {
    this.visibleCount += 10;
  }

  // Like / Dislike
  like(id) {
    const likes = JSON.parse(localStorage.getItem("likes") || "{}");
    likes[id] = (likes[id] || 0) + 1;
    localStorage.setItem("likes", JSON.stringify(likes));
    this.requestUpdate();
  }

  dislike(id) {
    const dislikes = JSON.parse(localStorage.getItem("dislikes") || "{}");
    dislikes[id] = (dislikes[id] || 0) + 1;
    localStorage.setItem("dislikes", JSON.stringify(dislikes));
    this.requestUpdate();
  }

  getLikes(id) {
    const likes = JSON.parse(localStorage.getItem("likes") || "{}");
    return likes[id] || 0;
  }

  getDislikes(id) {
    const dislikes = JSON.parse(localStorage.getItem("dislikes") || "{}");
    return dislikes[id] || 0;
  }

  sharePhoto(photoUrl) {
    navigator.clipboard.writeText(photoUrl).then(() => {
      alert("Photo link copied!");
    });
  }

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

      <div class="gallery">
        ${this.photos.slice(0, this.visibleCount).map(
          (p) => html`
            <div class="card">
              <img src="${p.photo}" alt="${p.author}" loading="lazy" />
              <p>${p.author}</p>
              <div class="btn-row">
                <button @click="${() => this.like(p.id)}">
                  Like ${this.getLikes(p.id)}
                </button>
                <button @click="${() => this.dislike(p.id)}">
                  Dislike ${this.getDislikes(p.id)}
                </button>
                <button @click="${() => this.sharePhoto(p.photo)}">Share</button>
              </div>
            </div>
          `
        )}
      </div>

      ${this.visibleCount < this.photos.length
        ? html`<div class="btn-row">
            <button @click="${this.loadMore}">Load More</button>
          </div>`
        : ""}
    `;
  }
}

customElements.define(RandomFoxGallery.tag, RandomFoxGallery);
