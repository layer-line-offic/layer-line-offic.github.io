/*
  Layerline store data. This is the one file that holds your listings.
  Change it by signing in at admin.html (Owner login), which saves straight to GitHub.

  Each design is an STL file sold with two licenses:
  personalPrice / personalUrl:      the Personal license price and its payment link
  commercialPrice / commercialUrl:  the Commercial license price and its payment link
  A payment link is the checkout link from Lemon Squeezy. Leave it empty and the Buy button opens an email to you instead.
  image: optional photo file name uploaded next to index.html. Empty shows the line drawing chosen in "art".
*/
window.STORE = {
  "site": {
    "name": "Layerline",
    "tagline": "STL files for FDM 3D printing",
    "email": "layerline@yahoo.com",
    "domain": "https://www.example.com",
    "instagram": "https://www.instagram.com/layer._.line?vrfl=MTNhMmozMGxkcGtxbQ==",
    "youtube": "",
    "locale": "en-US",
    "currency": "USD",
    "githubRepo": "layer-line-offic/layer-line-offic.github.io",
    "githubBranch": "main"
  },
  "products": [
    {
      "id": "drawer-system",
      "name": "Modular Drawer Organizer",
      "cat": "Workshop",
      "personalPrice": 4.99,
      "personalUrl": "",
      "commercialPrice": 19.99,
      "commercialUrl": "",
      "art": "organizer",
      "image": "",
      "blurb": "Interlocking trays with removable dividers, sized on a 42 mm grid so they stack and swap inside most standard drawers.",
      "mins": 340,
      "grams": 140,
      "layer": "0.20 mm",
      "nozzle": "0.4 mm",
      "supports": "None",
      "infill": "15% gyroid",
      "material": "PLA or PETG",
      "fit": "Dividers slide with 0.3 mm clearance"
    },
    {
      "id": "pi5-case",
      "name": "Raspberry Pi 5 Snap Case",
      "cat": "Enclosures",
      "personalPrice": 3.99,
      "personalUrl": "",
      "commercialPrice": 14.99,
      "commercialUrl": "",
      "art": "case",
      "image": "",
      "blurb": "Two-part case with a snap-fit lid, full port access, top vents and a mount for the active cooler.",
      "mins": 195,
      "grams": 38,
      "layer": "0.16 mm",
      "nozzle": "0.4 mm",
      "supports": "None",
      "infill": "20% grid",
      "material": "PETG",
      "fit": "Snap fit, no screws"
    },
    {
      "id": "herringbone-gears",
      "name": "Herringbone Gear Set",
      "cat": "Mechanical",
      "personalPrice": 6.99,
      "personalUrl": "",
      "commercialPrice": 24.99,
      "commercialUrl": "",
      "art": "gear",
      "image": "",
      "blurb": "A 12 and 36 tooth herringbone pair with matching shafts. Self-centering, so there is no thrust load on the bearings.",
      "mins": 125,
      "grams": 52,
      "layer": "0.12 mm",
      "nozzle": "0.4 mm",
      "supports": "None",
      "infill": "40% gyroid",
      "material": "PLA+ or Nylon",
      "fit": "0.25 mm backlash"
    },
    {
      "id": "headphone-hook",
      "name": "Under-Desk Headphone Hook",
      "cat": "Home",
      "personalPrice": 1.99,
      "personalUrl": "",
      "commercialPrice": 9.99,
      "commercialUrl": "",
      "art": "hook",
      "image": "",
      "blurb": "A wide, padded-radius hook that screws to the underside of a desk. Holds over-ear headphones without bending the headband.",
      "mins": 70,
      "grams": 24,
      "layer": "0.20 mm",
      "nozzle": "0.4 mm",
      "supports": "None",
      "infill": "35% cubic",
      "material": "PETG",
      "fit": "Two M4 screws"
    },
    {
      "id": "ripple-planter",
      "name": "Ripple Vase Planter",
      "cat": "Decor",
      "personalPrice": 2.99,
      "personalUrl": "",
      "commercialPrice": 12.99,
      "commercialUrl": "",
      "art": "vase",
      "image": "",
      "blurb": "A single-wall spiral vase with a rippled profile. Printed in vase mode, so it finishes fast and shows every layer.",
      "mins": 160,
      "grams": 46,
      "layer": "0.20 mm",
      "nozzle": "0.6 mm",
      "supports": "None",
      "infill": "Vase mode",
      "material": "PLA or silk PLA",
      "fit": "Holds a 90 mm nursery pot"
    },
    {
      "id": "spool-holder",
      "name": "Side-Mount Spool Holder",
      "cat": "Workshop",
      "personalPrice": 2.99,
      "personalUrl": "",
      "commercialPrice": 12.99,
      "commercialUrl": "",
      "art": "spool",
      "image": "",
      "blurb": "A free-spinning spool holder with a bearing seat. Clamps to a shelf edge up to 30 mm thick and takes 1 kg spools.",
      "mins": 255,
      "grams": 88,
      "layer": "0.20 mm",
      "nozzle": "0.4 mm",
      "supports": "Build plate only",
      "infill": "30% gyroid",
      "material": "PETG",
      "fit": "Two 608 bearings"
    }
  ]
};
