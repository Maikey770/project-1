// RandomFoxGallery Web Component with Lazy Loading and Theme Toggle
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
          max-width: 900px;
          margin: 0 auto;
          transition: background-color 0.3s, color 0.3s;
        }

        :host([darkmode]) {
          background-color: #111;
          color: #f4f4f4;
        }

        :host(:not([darkmode])) {
          background-color: #fafafa;
          color: #111;
        }

        h2 {
          text-align: center;
          font-size: 1.8rem;
          margin-bottom: 16px;
        }

        .btn-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        button {
          padding: 8px 16px;
          font-size: 1rem;
          cursor: pointer;
          border: none;
          border-radius: 6px;
          background-color: var(--ddd-theme-primary, #0078d7);
          color: white;
          transition: 0.3s;
        }

        button:hover {
          background-color: var(--ddd-theme-primary-hover, #005ea6);
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 16px;
        }

        .card {
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          background: #fff;
          color: #111;
          text-align: center;
          transition: transform 0.2s;
        }

        :host([darkmode]) .card {
          background: #222;
          color: #fafafa;
        }

        .card:hover {
          transform: scale(1.03);
        }

        img {
          width: 100%;
          display: block;
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        img.loaded {
          opacity: 1;
        }

        small {
          display: block;
          margin-bottom: 8px;
          font-size: 0.85rem;
          color: gray;
        }

        .author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .author img {
          width: 28px;
          height: 28px;
          border-radius: 50%;
        }
      `,
    ];
  }

  // Fetch gallery data from API endpoint
  async loadGallery() {
    this.loading = true;
    try {
      const res = await fetch("/api/gallery");
      this.photos = await res.json();
    } catch (err) {
      console.error("Error loading gallery:", err);
    } finally {
      this.loading = false;
    }
  }

  // Switch between dark and light modes
  toggleMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      this.setAttribute("darkmode", "");
    } else {
      this.removeAttribute("darkmode");
    }
  }

  // Lazy loading images using IntersectionObserver
  firstUpdated() {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.onload = () => img.classList.add("loaded");
            obs.unobserve(img);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all lazy images
    const lazyImages = this.renderRoot.querySelectorAll("img.lazy");
    lazyImages.forEach((img) => observer.observe(img));
  }

  render() {
    return html`
      <h2>Random Fox Gallery</h2>
      <div class="btn-row">
        <button @click="${this.loadGallery}">
          ${this.loading ? "Loading..." : "Load Gallery"}
        </button>
        <button @click="${this.toggleMode}">
          ${this.darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      <div class="gallery">
        ${this.photos.map(
          (p) => html`
            <div class="card">
              <img data-src="${p.thumbSrc}" alt="${p.name}" class="lazy" />
              <div class="author">
                <img src="${p.author.avatar}" alt="${p.author.name}" />
                <span>@${p.author.channel}</span>
              </div>
              <p>${p.name}</p>
              <small>Taken on ${p.dateTaken}</small>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define(RandomFoxGallery.tag, RandomFoxGallery);
