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
          margin: 0 auto;
          background-color: var(--ddd-theme-default-sky, #222);
          color: var(--ddd-theme-default-skytext, #fff);
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
        }

        button {
          background-color: #ff8c1a;
          color: white;
          border: none;
          border-radius: 6px;
          padding: 8px 16px;
          cursor: pointer;
          margin-top: 20px;
        }

        button:hover {
          opacity: 0.9;
        }

        img {
          width: 100%;
          max-height: 400px;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
          margin-bottom: 15px;
        }

        .loading {
          font-size: 1.2rem;
          color: #ff8c1a;
          margin-top: 10px;
        }
      `,
    ];
  }

  // 初次加载时自动拉取一张随机狐狸图片
  firstUpdated() {
    this.loadRandomFox();
  }

  async loadRandomFox() {
    this.loading = true;
    try {
      // 调用随机狐狸 API
      const res = await fetch("https://randomfox.ca/floof/");
      const data = await res.json();
      this.photos = [data.image];
    } catch (err) {
      console.error("Error loading fox image:", err);
    } finally {
      this.loading = false;
    }
  }

  render() {
    return html`
      <h2>Random Fox Gallery 🦊</h2>
      ${this.loading
        ? html`<div class="loading">Loading...</div>`
        : html`
            ${this.photos.map(
              (src) => html`<img src=${src} alt="Random Fox" />`
            )}
            <button @click=${this.loadRandomFox}>Load Another Fox</button>
          `}
    `;
  }
}

customElements.define(RandomFoxGallery.tag, RandomFoxGallery);
