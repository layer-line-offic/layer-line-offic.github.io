# Layerline site

A static store for your STL designs. No server and no database. Customers buy through Lemon Squeezy and get their STL by email.

## What is in the folder

| File | Purpose |
| --- | --- |
| `index.html` | Home page with catalog, how it works, license table, FAQ and contact |
| `product.html` | One page per design, with the Personal and Commercial buy options |
| `terms.html`, `privacy.html`, `refunds.html` | Policy pages. Read and adjust them before launch |
| `404.html` | Page shown for unknown addresses |
| `store.js` | **Your listings.** Name, email, prices and payment links live here |
| `admin.html` | Owner login. Edits listings and saves them straight to GitHub |
| `styles.css`, `site.js` | Look and behavior of the site |
| `robots.txt`, `sitemap.xml` | Search engine files |

Upload all of these as loose files at the top level of your repository. Do not upload them inside a folder.

## Selling STL files with two licenses

Each design has two options at the buy button:

- **Personal**: print for yourself, gifts, modify for own use.
- **Commercial**: everything in Personal, plus selling the prints you make.

In Lemon Squeezy, create each design as a product with two variants named Personal and Commercial, each with its own price. Copy each variant's checkout link and paste it into the matching payment link field in the owner login. Upload the STL file to the product so Lemon Squeezy emails it after payment. If your screen shows one price per product, make two products per design instead.

A design with no payment link shows a "Buy by email" button that opens an email to you.

## Owner login

Customers never log in. Only the person who holds a GitHub access token for this repository can change listings.

1. Open `https://YOUR-SITE/admin.html`, or use the Owner login link at the bottom of any page.
2. Paste your token and choose Sign in.
3. Add, edit, reorder or remove designs, then choose **Publish changes**. The live site updates in about a minute or two.

The login page itself is public, but it contains no password. Without your token it can do nothing.

### Make your token (once)

1. In GitHub, open your profile picture, then Settings, then Developer settings, then Personal access tokens, then Fine-grained tokens, then Generate new token.
2. Name it `layerline-admin` and set an expiry, for example 90 days.
3. Under Repository access choose Only select repositories, and pick your site repository.
4. Under Permissions, Repository permissions, set **Contents** to **Read and write**.
5. Generate the token and copy it. GitHub shows it only once.

Keep the token private, like a password. If it leaks or you lose it, delete it in the same GitHub screen and make a new one. The page keeps the token in the browser tab only and clears it when you sign out or close the tab.

## Before you publish for real

1. Sign in to the owner login and set your store details and website address.
2. Replace the six sample designs and their placeholder prices with your own.
3. Paste in a Lemon Squeezy payment link for each license.
4. In `robots.txt` and `sitemap.xml`, replace `https://www.example.com` with your real address.
5. Read `terms.html`, `privacy.html` and `refunds.html`. They are plain templates and are not legal advice. Check that the Commercial license wording matches what you want to allow.

## Hosting

The site works on GitHub Pages as a repository named `YOUR-USERNAME.github.io`. Host it at the root of a domain. The 404 page uses root-based paths, so it will not look right in a sub-folder.
