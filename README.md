<h1 align="center">Verdant &amp; Vellum</h1>

<p align="center">
  <em>Gothic apothecary and dark academia digital assets.</em><br>
  High-resolution, 300 DPI transparent PNG clipart for junk journalers, stationers, paper crafters and print-on-demand sellers.
</p>

<p align="center">
  <a href="https://aman-lab1.github.io/Verdant-Vellum/"><strong>Visit the live site</strong></a>
  &nbsp;|&nbsp;
  <a href="https://www.instagram.com/verdant.and.vellum/">Instagram</a>
  &nbsp;|&nbsp;
  <a href="https://pin.it/oS2KEFTDx">Pinterest</a>
</p>

---

## About

This repository is the storefront showcase for the **Verdant & Vellum** brand: a static, frontend-only website with a gothic horror look. Every product has its own pop-up with a gallery, description, contents and price, and its **Buy now** button links to the external Payhip checkout, where payment and file delivery are handled.

## Products

| Release | Description | Price | Link |
|---|---|---|---|
| **The Midnight Desk Freebie** (Vol. 00) | Free starter pack of transparent PNGs | Free | [Get it on Payhip](https://payhip.com/b/7ORyg) |
| **Cabinet of Curiosities** (Vol. 01) | 16 transparent PNGs: alchemical relics, gothic apothecary glassware and poisonous botanicals, 3000 x 3000 px+ at 300 DPI | $3 (launch price, regular $6) | [Buy on Payhip](https://payhip.com/b/lI7yZ) |

**License at a glance:** unlimited personal projects, small business sales up to 500 units, and print-on-demand when the art is mixed into a new composite design. No reselling, sharing or bundling the raw PNG files. Full details are in the Licensing section of the site.

## Features

- Gothic horror design: film grain, a flickering headline, and candle-light that follows your cursor
- Product pop-ups with an image gallery, contents list and specs
- Shareable link for every product, for example `/#item-cabinet-of-curiosities-vol-01`
- Responsive layout for phones, tablets and desktops, plus a mobile menu
- Accessible basics: keyboard navigation, focus styles, alt text, and reduced-motion support
- Built-in Privacy Policy and Terms of Service pop-ups
- No frameworks, no build step, no dependencies

## Tech

Pure HTML5, CSS3 and vanilla JavaScript (ES6). Fonts (Special Elite and IM Fell English) load from Google Fonts.

## Project structure

```
index.html    page structure
style.css     gothic theme and responsive layout
script.js     store settings, product data, pop-ups, mobile menu
images/       website preview images (WebP)
```

## Run locally

Open `index.html` in any browser, or serve the folder:

```
python -m http.server 8000
```

Then visit http://localhost:8000.

## Customise

Everything editable lives at the top of `script.js`:

- **`CONFIG`**: store link, contact email and social links
- **`PRODUCTS`**: one block per product (title, price, description, contents, images, Payhip link). A product appears on the site once its `url` is filled in.

## Deploy

Hosted free on GitHub Pages: Settings, Pages, deploy from the `main` branch, `/ (root)`.

## License

The website code and all artwork are the property of Verdant & Vellum. All rights reserved. The artwork is licensed to customers only through purchase or the free download, under the license shown on the site. Please do not copy, redistribute or resell any images from this repository.

## Contact

[vanitasandvine@gmail.com](mailto:vanitasandvine@gmail.com)