import { html, fixture, expect } from '@open-wc/testing';
import "../random-fox-gallery.js";

describe("RandomFoxGallery test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <random-fox-gallery
        title="title"
      ></random-fox-gallery>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
