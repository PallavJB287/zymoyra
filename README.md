# Zymoyra.co — Website

Handmade small business site for zymoyra.co — custom gifts, crochet, beaded accessories, and hand-painted clothing. Built as a free static site (no backend), hosted via GitHub + Netlify.

## Status

**Currently live:** coming-soon page (`index.html`)
**Built but not live yet:** full catalog page (`after_launch.html`)

## File map

| File | Purpose | After launch |
|---|---|---|
| `index.html` | Live coming-soon page | Archived |
| `coming-soon.css` | Styles for the coming-soon page | Archived |
| `after_launch.html` | Full catalog page (built, not live) | Renamed to `index.html` |
| `styles.css` | Styles for the catalog page | Becomes the main CSS |
| `script.js` | Loads and renders products from `products.json` | Stays |
| `products.json` | Product data — sample/placeholder for now | Update with real products before launch |
| `logo.png` | Site logo (Instagram profile picture) | Stays |

## To-do before launch

- [ ] Get real product photos from friend
- [ ] Replace placeholder names/prices in `products.json`
- [ ] Confirm real shipping/turnaround wording (currently a placeholder line in `after_launch.html`)
- [ ] Decide on a launch date
- [ ] On launch day: archive `index.html` + `coming-soon.css`, rename `after_launch.html` → `index.html`

## Project notes

- **Instagram:** [@zymoyra.co](https://instagram.com/zymoyra.co)
- **Categories:** Custom gifts · Crochet · Beaded accessories · Hand-painted clothing
- **Color palette:** cream background, dusty rose + sage accents, pulled from the logo
- **Ordering (phase 1):** customers DM on Instagram — no cart/checkout yet
- **Phase 2 (later, if needed):** in-site ordering + payments
- **Category filtering:** not needed yet (few products), but `products.json` already tags each item by category so it's a small add later, not a rebuild
- **Hosting:** code lives on GitHub (for git practice); deployed via Netlify for a shorter URL without a personal username in it

## Local preview

`script.js` fetches `products.json`, which browsers block when opening the HTML file directly (`file://`). To preview the catalog page locally:

```
python3 -m http.server
```

Then visit `http://localhost:8000` in a browser.
