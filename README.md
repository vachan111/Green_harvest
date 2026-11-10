<div align="center">

# 🌱 GreenHarvest Agriculture

### Grow more. Waste less. Farm for the future.

**A responsive agriculture and smart-farming website concept for Indian farmers.**

[Overview](#-overview) · [Features](#-features) · [Run locally](#-run-locally) · [Project structure](#-project-structure) · [Deployment](#-publish-with-github-pages)

![HTML](https://img.shields.io/badge/HTML5-structure-orange)
![CSS](https://img.shields.io/badge/CSS3-responsive-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-yellow)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB)
![Three.js](https://img.shields.io/badge/Three.js-r128-black)

</div>

---

## 🌾 Overview

GreenHarvest Agriculture is a front-end website concept designed around the needs of farmers, agricultural experts, suppliers and customers in Indian villages. Its content presents products and services such as organic farming kits, certified seeds, smart irrigation, crop consultancy and modern equipment, alongside technology-led farming solutions.

The interface includes English, Hindi and Telugu navigation/content translations, an animated Three.js farming hero scene, product and solution sections, a farming-process timeline, a photo gallery, impact counters, farmer reviews, FAQs, a contact form interface and the Kisan Mitra chatbot.

> **Project status:** This repository contains a browser-based front-end implementation. It does not include a server, database, live AI integration, payment system, order management or a working form/newsletter delivery service.

## ✨ Features

- **Welcome screen:** CSS-only Namaste / స్వాగతం introduction that fades away after a short delay.
- **Responsive navigation:** Fixed navigation bar, mobile menu and section links.
- **Language selector:** English, Hindi and Telugu labels and hero copy.
- **Animated hero:** Three.js scene with stylized crops, moving clouds, a tractor, sun and floating objects; a CSS gradient remains as the visual background.
- **Hero image slot:** Looks for `hero-farmer.jpg` beside `index.html`; if it is missing, the page displays a placeholder message.
- **About section:** Project story, mission and vision.
- **Products and services:** Organic Farming Kits, Certified Seeds, Smart Irrigation, Crop Consultancy and Modern Equipment, with the prices/text currently written in the source.
- **Farming solutions:** Smart farming, water management, soil health and disease prevention tabs.
- **Farm journey:** Sow → Grow → Harvest → Deliver timeline.
- **Gallery:** Six farm-image entries with a click-to-enlarge lightbox.
- **Impact counters:** Animated counters for farmers served, acres improved, water saved and villages reached.
- **Reviews:** Seed review examples, star ratings, a rotating review display and a review form. New reviews are stored in the visitor's browser using `localStorage`.
- **FAQs:** Expandable answers about smartphones, delivery, organic farming and equipment rental.
- **Contact section:** Contact details, OpenStreetMap embed and client-side field validation.
- **Kisan Mitra chatbot:** Chat interface, quick prompts and local keyword-based answers.
- **Newsletter interface:** Email input and a local “Subscribed!” state.
- **Floating actions:** WhatsApp link, chatbot button and back-to-top button.
- **Accessibility and motion considerations:** Semantic labels/roles, visible keyboard focus styling, image alt text in many sections and a reduced-motion CSS preference.

## 🧰 Technology

| Technology / service | How this project uses it |
|---|---|
| HTML5 | Page shell and root element in `index.html` |
| CSS3 | Layout, responsive styling, animation and visual theme in `style.css` |
| JavaScript | Application logic in `react.js`; no JSX or Babel build step |
| React 18.2.0 | UI rendering and component state, loaded as browser UMD scripts |
| ReactDOM 18.2.0 | Mounts the React application into `#root` |
| Three.js r128 | Optional WebGL animated hero scene |
| Font Awesome 6.5.1 | Interface icons |
| Google Fonts | Fraunces and Nunito Sans typography |
| Unsplash image URLs | Remote farming and agriculture imagery |
| OpenStreetMap | Embedded map in the contact section |

The external libraries are loaded from CDN URLs in `index.html`. React and ReactDOM have fallback CDN URLs. Three.js is optional: if it cannot be loaded, the app continues without the 3D scene.

## 📁 Project structure

```text
GreenHarvest/
├── index.html       # HTML entry point; loads CDN libraries and react.js
├── react.js         # React application, content, data and interactions
├── style.css        # Theme, layout, responsive rules and animations
├── hero-farmer.jpg  # Optional local hero image (add this yourself)
├── README.md        # Main project documentation
├── CONTRIBUTING.md  # Contribution guidance
├── .gitignore       # Suggested Git ignore rules
└── docs/
    ├── FEATURES.md  # Feature inventory and current behavior
    ├── SETUP.md     # Local setup and troubleshooting
    └── DEPLOYMENT.md# GitHub Pages publishing instructions
```

`hero-farmer.jpg` is not one of the supplied source files. The app references that filename as an optional image; add your own appropriately licensed image or leave the placeholder behavior in place.

## ▶️ Run locally

**Requirements:** A modern browser and an internet connection for the CDN-hosted libraries, fonts, icons, remote images and map.

1. Download or clone this repository.
2. Keep `index.html`, `react.js` and `style.css` in the same folder.
3. Optionally place `hero-farmer.jpg` in that same folder.
4. Open `index.html` in a modern browser.
5. If the page does not load correctly from a local file, run a simple local HTTP server (instructions in [`docs/SETUP.md`](docs/SETUP.md)).

No npm installation, package manager, JSX transpilation or build command is required by the supplied files.

## 🚀 Publish with GitHub Pages

1. Create a new repository on GitHub.
2. Upload `index.html`, `react.js`, `style.css`, this README and the documentation folders.
3. Commit the files to the repository's publishing branch (commonly `main`).
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select `main` and `/ (root)`, then save.
7. Wait for GitHub Pages to publish and open the URL shown in the Pages settings.

More detailed click-by-click instructions are in [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## ⚙️ Customization

- **Hero image:** In `react.js`, edit `IMAGES.hero`; the current value is `hero-farmer.jpg`.
- **Other image URLs:** Edit the `IMAGES` object and the `U(...)` helper near the top of `react.js`.
- **Text translations:** Edit `T.en`, `T.hi` and `T.te` in `react.js`. Only the navigation labels and hero heading, subtitle and CTA labels are translated in the supplied translation object; much of the remaining page content is currently English.
- **Products and displayed prices:** Edit the `PRODUCTS` array in `react.js`.
- **Solutions, FAQs and chatbot keyword replies:** Edit `SOLUTIONS`, `FAQS` and `BOT` in `react.js`.
- **Contact details:** Update the contact section, chatbot reply and WhatsApp URL in `react.js` wherever the sample details appear.
- **Colors and typography:** Edit the CSS custom properties in `:root` at the top of `style.css`.

## ⚠️ Important implementation notes

Please read these notes before presenting the site as a live business service:

1. **Contact form:** It validates the entered name, email, Indian mobile number and message in the browser, then shows a success message. The supplied code does not send or store the message on a server.
2. **Chatbot:** `callAI()` currently returns `null`. The chatbot therefore uses the local keyword rules in `BOT` and a default response. The commented `/api/chat` example is only a placeholder; no backend endpoint is supplied.
3. **Newsletter:** The form validates an email pattern and changes the local input state to “Subscribed!”. It does not subscribe the address to an email platform.
4. **Reviews:** Reviews are saved in the visitor's own browser under the `gh_reviews` localStorage key. They are not shared between users or devices and can be cleared with browser data.
5. **Content and figures:** Product descriptions, prices, service claims, impact figures, testimonials, delivery statements and contact details are hard-coded demonstration content in `react.js`. Verify and replace them before using the site commercially.
6. **Images and external services:** Most images, fonts, icons, maps and libraries depend on third-party network services. Their availability and terms are controlled by those providers.
7. **Security:** Do not put private API keys or secrets in `react.js`, `index.html` or any other browser-delivered file. A real AI integration requires a server-side endpoint and secure secret handling.
8. **Privacy:** The current front end stores review entries in local browser storage. Add an appropriate privacy notice and backend/data-handling policy before collecting real customer information.

## 🧪 Quick test checklist

- [ ] Open the page with an internet connection and confirm React loads.
- [ ] Check that all three main files are in the same directory.
- [ ] Confirm the hero image is present or that the placeholder is acceptable.
- [ ] Test the mobile navigation and all section links.
- [ ] Switch between English, Hindi and Telugu.
- [ ] Open each solution tab and gallery image.
- [ ] Submit a test review and refresh to check browser-local persistence.
- [ ] Test contact form validation with invalid and valid sample values.
- [ ] Test chatbot quick prompts and keyword replies.
- [ ] Check the page at desktop and mobile widths.

## 📄 License

No license file or license terms were included in the supplied project files. Add a `LICENSE` file only after choosing the license you want to apply. Until then, do not assume that others have permission to reuse, modify or redistribute the project.

---

<div align="center">

**GreenHarvest Agriculture** · *Grow more. Waste less.*

</div>
