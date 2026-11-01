/*
  Layerline store data. This is the one file you change to update the site.
  Easiest way to edit it: open admin.html on your computer, add or remove designs,
  choose "Download store.js", then replace this file on your host.

  buyUrl:  the payment link for that design (Razorpay, Gumroad, Lemon Squeezy, Stripe and similar).
           Leave it empty and the Buy button opens an email to you instead.
  image:   optional file name of a photo you upload next to index.html, for example "gear-set.jpg".
           Leave it empty to show the line drawing chosen in "art".
*/
window.STORE = {
  "site": {
    "name": "Layerline",
    "tagline": "CAD designs for FDM 3D printing",
    "email": "layerline@yahoo.com",
    "domain": "https://www.example.com",
    "instagram": "",
    "youtube": "",
    "locale": "en-US",
    "currency": "USD"
  },
  "products": [
    {
      "id": "drawer-system", "name": "Modular Drawer Organizer", "cat": "Workshop", "price": 4.99, "art": "organizer", "image": "", "buyUrl": "",
      "blurb": "Interlocking trays with removable dividers, sized on a 42 mm grid so they stack and swap inside most standard drawers.",
      "formats": "STL + STEP", "mins": 340, "grams": 140, "layer": "0.20 mm", "nozzle": "0.4 mm", "supports": "None", "infill": "15% gyroid", "material": "PLA or PETG", "fit": "Dividers slide with 0.3 mm clearance"
    },
    {
      "id": "pi5-case", "name": "Raspberry Pi 5 Snap Case", "cat": "Enclosures", "price": 3.99, "art": "case", "image": "", "buyUrl": "",
      "blurb": "Two-part case with a snap-fit lid, full port access, top vents and a mount for the active cooler.",
      "formats": "STL + STEP", "mins": 195, "grams": 38, "layer": "0.16 mm", "nozzle": "0.4 mm", "supports": "None", "infill": "20% grid", "material": "PETG", "fit": "Snap fit, no screws"
    },
    {
      "id": "herringbone-gears", "name": "Herringbone Gear Set", "cat": "Mechanical", "price": 6.99, "art": "gear", "image": "", "buyUrl": "",
      "blurb": "A 12 and 36 tooth herringbone pair with matching shafts. Self-centering, so there is no thrust load on the bearings.",
      "formats": "STEP + STL", "mins": 125, "grams": 52, "layer": "0.12 mm", "nozzle": "0.4 mm", "supports": "None", "infill": "40% gyroid", "material": "PLA+ or Nylon", "fit": "0.25 mm backlash"
    },
    {
      "id": "headphone-hook", "name": "Under-Desk Headphone Hook", "cat": "Home", "price": 1.99, "art": "hook", "image": "", "buyUrl": "",
      "blurb": "A wide, padded-radius hook that screws to the underside of a desk. Holds over-ear headphones without bending the headband.",
      "formats": "STL", "mins": 70, "grams": 24, "layer": "0.20 mm", "nozzle": "0.4 mm", "supports": "None", "infill": "35% cubic", "material": "PETG", "fit": "Two M4 screws"
    },
    {
      "id": "ripple-planter", "name": "Ripple Vase Planter", "cat": "Decor", "price": 2.99, "art": "vase", "image": "", "buyUrl": "",
      "blurb": "A single-wall spiral vase with a rippled profile. Printed in vase mode, so it finishes fast and shows every layer.",
      "formats": "STL", "mins": 160, "grams": 46, "layer": "0.20 mm", "nozzle": "0.6 mm", "supports": "None", "infill": "Vase mode", "material": "PLA or silk PLA", "fit": "Holds a 90 mm nursery pot"
    },
    {
      "id": "spool-holder", "name": "Side-Mount Spool Holder", "cat": "Workshop", "price": 2.99, "art": "spool", "image": "", "buyUrl": "",
      "blurb": "A free-spinning spool holder with a bearing seat. Clamps to a shelf edge up to 30 mm thick and takes 1 kg spools.",
      "formats": "STL + STEP", "mins": 255, "grams": 88, "layer": "0.20 mm", "nozzle": "0.4 mm", "supports": "Build plate only", "infill": "30% gyroid", "material": "PETG", "fit": "Two 608 bearings"
    }
  ]
};
