// RandomFoxGallery Web Component (3 columns, no emojis)
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
          padding: 0;
          max-width: 1200px; /* Three columns layout */
          margin: 0 auto;
        }

        .container {
          border: 2px solid #ff8c1a;
          border-radius: 12px;
          padding: 40px;
          box-shadow: 0 0 20px rgba(255, 140, 26, 0.4);
          background-color: var(--container-bg, #1a1a1a);
          transition: all 0.3s ease;
        }

        :host([darkmode]) .container {
          --container-bg: #111;
        }

        :host(:not([darkmode])) .container {
          --container-bg: #fafafa;
        }

        h2 {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 20px;
          color: var(--ddd-theme-primary, #ff8c1a);
        }

        .btn-row {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 25px;
        }

        button {
          padding: 10px 18px;
          font-size: 1rem;
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
          grid-template-columns: repeat(3, 1fr); /* Three cards per row */
          gap: 22px;
        }

        .card {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.18);
          background: #fff;
          color: #111;
          text-align: center;
          transition: transform 0.2s, box-shadow 0.2s;
          padding: 16px 10px;
        }

        :host([darkmode]) .card {
          background: #222;
          color: #fafafa;
        }

        .card:hover {
          transform: scale(1.03);
          box-shadow: 0 4px 14px rgba(255, 140, 26, 0.25);
        }

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 10px;
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
          margin-bottom: 10px;
        }

        .author img {
          width: 26px;
          height: 26px;
          border-radius: 50%;
        }

        .interaction {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }

        .interaction button {
          background-color: #ff8c1a;
          border: none;
          border-radius: 6px;
          padding: 6px 12px;
          color: white;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .interaction button:hover {
          background-color: #e67e00;
        }
      `,
    ];
  }

  // Fetch photo data from API endpoint
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

  // Toggle between dark and light themes
  toggleMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      this.setAttribute("darkmode", "");
    } else {
      this.removeAttribute("darkmode");
    }
  }

  // Add a like to a photo
  like(id) {
    const likes = JSON.parse(localStorage.getItem("likes") || "{}");
    likes[id] = (likes[id] || 0) + 1;
    localStorage.setItem("likes", JSON.stringify(likes));
    this.requestUpdate();
  }

  // Add a dislike to a photo
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

  // Copy photo link to clipboard
  share(photoUrl) {
    navigator.clipboard.writeText(photoUrl).then(() => {
      alert("Photo link copied to clipboard!");
    });
  }

  // Lazy loading using IntersectionObserver
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

    const lazyImages = this.renderRoot.querySelectorAll("img.lazy");
    lazyImages.forEach((img) => observer.observe(img));
  }

  render() {
    return html`
      <div class="container">
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
                  <span>${p.author.channel}</span>
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
                  <button @click="${() => this.share(p.thumbSrc)}">
                    Share
                  </button>
                </div>
              </div>
            `
          )}
        </div>
      </div>
    `;
  }
}

customElements.define(RandomFoxGallery.tag, RandomFoxGallery);

