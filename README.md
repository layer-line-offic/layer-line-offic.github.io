# Layerline site

A complete static store for your CAD designs. No build step, no server, no database.

## What is in the folder

| File | Purpose |
| --- | --- |
| `index.html` | Home page with catalog, how it works, license, FAQ and contact |
| `product.html` | One page per design, opened as `product.html?id=...` |
| `terms.html`, `privacy.html`, `refunds.html` | Policy pages. Read and adjust them before launch |
| `404.html` | Page shown for unknown addresses |
| `store.js` | **Your store data.** Name, email and every design live here |
| `admin.html` | Your private editor. Opens on your computer and writes a new `store.js` |
| `assets/` | Styles and scripts |
| `images/` | Put design photos here, then enter the file name in the editor |
| `robots.txt`, `sitemap.xml` | Search engine files |

## Before you publish

1. Open `admin.html` (double-click it) and set your store name, contact email and website address.
2. For each design, paste its **payment link** from Razorpay, Gumroad, Lemon Squeezy or Stripe. Set the link to deliver the STL and STEP files after payment. Designs without a link show a "Buy by email" button.
3. Replace the six sample designs with your own. Choose **Download store.js** and put the downloaded file in this folder, replacing the old one.
4. In `robots.txt` and `sitemap.xml`, replace `https://www.example.com` with your real address.
5. Read `terms.html`, `privacy.html` and `refunds.html`. They are plain templates and are not legal advice. Have them checked for your business, especially if you take payments from other countries.

## Publishing

Upload the whole folder to any static host. Netlify and Cloudflare Pages accept a drag-and-drop of the folder. GitHub Pages works too. Point your domain at the host from its settings page.

Host the site at the root of a domain (`www.yourdomain.com`). The 404 page uses root-based paths, so it will not look right when the site lives in a sub-folder.

## Updating the store later

1. Open `admin.html` from your computer.
2. Add, edit, reorder or remove designs.
3. Choose **Download store.js** and upload it over the old one. Add any new photos to `images/`.

`admin.html` cannot change the live site by itself, so it is safe if you upload it, but you do not need to. Search engines are told to skip it.

## Taking payments safely

Customers pay on your payment provider's own page. This site never handles card or UPI details, and a cart is not needed. Each Buy button sends the customer straight to that design's payment link.
