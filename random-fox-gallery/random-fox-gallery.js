// Simple gallery that loads photos from api
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
    };
  }

  constructor() {
    super();
    this.photos = [];
    this.loading = false;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          background: #1e1e1e;
          color: white;
          padding: 20px;
          border-radius: 12px;
          text-align: center;
          max-width: 700px;
          margin: 40px auto;
        }
        img {
          width: 100%;
          border-radius: 10px;
        }
        button {
          background: #ff8c1a;
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
      `,
    ];
  }

  // Fetch data from our API
  async loadGallery() {
    this.loading = true;
    const res = await fetch("/api/gallery");
    this.photos = await res.json();
    this.loading = false;
  }

  // Like a photo and save to localStorage
  like(id) {
    const likes = JSON.parse(localStorage.getItem("likes") || "{}");
    likes[id] = (likes[id] || 0) + 1;
    localStorage.setItem("likes", JSON.stringify(likes));
    this.requestUpdate();
  }

  // Get the like count
  getLikes(id) {
    const likes = JSON.parse(localStorage.getItem("likes") || "{}");
    return likes[id] || 0;
  }

  render() {
    return html`
      <h2>Fox Gallery</h2>
      <button @click="${this.loadGallery}">
        ${this.loading ? "Loading..." : "Load Gallery"}
      </button>

      ${this.photos.map(
        (p) => html`
          <div class="card">
            <img src="${p.photo}" alt="${p.author}" />
            <p>${p.author}</p>
            <button @click="${() => this.like(p.id)}">
               ${this.getLikes(p.id)}
            </button>
          </div>
        `
      )}
    `;
  }
}

customElements.define(RandomFoxGallery.tag, RandomFoxGallery);
