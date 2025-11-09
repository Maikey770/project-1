// RandomFoxGallery Web Component with Lazy Loading, Theme Toggle, and Interaction Buttons
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
          font-size: 2rem;
          margin-bottom: 16px;
          color: inherit;
        }

        .btn-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        button {
          padding: 8px 14px;
          font-size: 0.9rem;
          cursor: pointer;
          border: none;
          border-radius: 6px;
          background-color: var(--ddd-theme-primary, #ff8c1a);
          color: white;
          transition: 0.3s;
        }

        button:hover {
          background-color: var(--ddd-theme-primary-hover, #e67e00);
        }

        .gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
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
          padding-bottom: 10px;
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
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-bottom: 10px;
        }

        .author img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        .author-name {
          font-weight: 600;
          font-size: 0.95rem;
        }

        .author-channel {
          font-size: 0.85rem;
          color: gray;
        }

        .interaction {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
        }

        .interaction button {
          background-color: #ff8c1a;
          border: none;
          border-radius: 6px;
          padding: 6px 10px;
          color: white;
          cursor: pointer;
          font-size: 0.8rem;
        }

        .interaction button:hover {
          background-color: #e67e00;
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
      await this.updateComplete;
      this.setupLazyLoading();
    } catch (err) {
      console.error("Error loading gallery:", err);
    } finally {
      this.loading = false;
    }
  }

  // Initialize IntersectionObserver for lazy loading
  setupLazyLoading() {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.onload = () => img.classList.add("loaded");
              obs.unobserve(img);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const lazyImages = this.renderRoot.querySelectorAll("img.lazy");
    lazyImages.forEach((img) => observer.observe(img));
  }

  // Toggle between light and dark modes
  toggleMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      this.setAttribute("darkmode", "");
    } else {
      this.removeAttribute("darkmode");
    }
  }

  // Handle like action
  like(id) {
    const likes = JSON.parse(localStorage.getItem("likes") || "{}");
    likes[id] = (likes[id] || 0) + 1;
    localStorage.setItem("likes", JSON.stringify(likes));
    this.requestUpdate();
  }

  // Handle dislike action
  dislike(id) {
    const dislikes = JSON.parse(localStorage.getItem("dislikes") || "{}");
    dislikes[id] = (dislikes[id] || 0) + 1;
    localStorage.setItem("dislikes", JSON.stringify(dislikes));
    this.requestUpdate();
  }

  // Handle share action
  share(url) {
    navigator.clipboard.writeText(url).then(() => {
      alert("Image link copied to clipboard");
    });
  }

  // Get total likes for a specific photo
  getLikes(id) {
    const likes = JSON.parse(localStorage.getItem("likes") || "{}");
    return likes[id] || 0;
  }

  // Get total dislikes for a specific photo
  getDislikes(id) {
    const dislikes = JSON.parse(localStorage.getItem("dislikes") || "{}");
    return dislikes[id] || 0;
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
              <img
                data-src="${p.thumbSrc}"
                alt="${p.name}"
                class="lazy"
                loading="lazy"
              />

              <div class="author">
                <img src="${p.author.avatar}" alt="${p.author.name}" />
                <span class="author-name">Author: ${p.author.name}</span>
                <span class="author-channel">${p.author.channel}</span>
              </div>

              <p>${p.name}</p>
              <small>Taken on ${p.dateTaken}</small>

              <div class="interaction">
                <button @click="${() => this.like(p.id)}">
                  Like ${this.getLikes(p.id)}
                </button>
                <button @click="${() => this.dislike(p.id)}">
                  Dislike ${this.getDislikes(p.id)}
                </button>
                <button @click="${() => this.share(p.thumbSrc)}">Share</button>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define(RandomFoxGallery.tag, RandomFoxGallery);
