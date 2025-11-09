// Simple static gallery with lazy loading
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class RandomFoxGallery extends DDDSuper(LitElement) {
  static get tag() {
    return "random-fox-gallery";
  }

  static get properties() {
    return {
      allPhotos: { type: Array },
      photosToDisplay: { type: Array },
      batchSize: { type: Number },
      loadedCount: { type: Number },
    };
  }

  constructor() {
    super();
    this.allPhotos = [];
    this.photosToDisplay = [];
    this.batchSize = 10; // 每次加载 10 张
    this.loadedCount = 0;
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          text-align: center;
        }

        .gallery {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
        }

        img {
          width: 220px;
          height: 160px;
          object-fit: cover;
          border-radius: 8px;
          border: 2px solid #ff8c1a;
          box-shadow: 0 0 6px rgba(255, 140, 26, 0.4);
        }

        button {
          margin-top: 20px;
          background-color: #ff8c1a;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 8px 16px;
          cursor: pointer;
        }

        button:hover {
          opacity: 0.9;
        }
      `,
    ];
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadPhotos();
  }

  async loadPhotos() {
    try {
      const res = await fetch("./data/photos.json");
      const data = await res.json();
      this.allPhotos = data;
      this.loadMore();
    } catch (err) {
      console.error("Failed to load photos:", err);
    }
  }

  loadMore() {
    const nextCount = this.loadedCount + this.batchSize;
    this.photosToDisplay = this.allPhotos.slice(0, nextCount);
    this.loadedCount = nextCount;
  }

  render() {
    return html`
      <div class="gallery">
        ${this.photosToDisplay.map(
          (photo) => html`
            <img
              src=${photo.thumbSrc}
              alt=${photo.name}
              loading="lazy"
              title=${photo.name}
            />
          `
        )}
      </div>

      ${this.loadedCount < this.allPhotos.length
        ? html`<button @click=${this.loadMore}>Load More</button>`
        : html`<p>All photos loaded ✅</p>`}
    `;
  }
}

customElements.define(RandomFoxGallery.tag, RandomFoxGallery);
