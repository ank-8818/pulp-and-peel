# Pulp & Peel

A playful landing page for a fictional juice and smoothie bar, built with Bootstrap. This was my first portfolio project, and my first real project with a CSS framework, so it's deliberately a foundational piece rather than the most ambitious one in my portfolio.

**Live site:** https://ank-8818.github.io/pulp-and-peel/

---

## About this project

Pulp & Peel exists to prove I can take Bootstrap's components and grid system and make them feel custom, not off-the-shelf. Every section uses a Bootstrap building block (the navbar, the pricing-card grid, nav-pills for tabs) styled with a custom color palette, custom typography, and brand-specific touches like the eyebrow labels and punchline copy, rather than looking like a default Bootstrap theme.

## Features

- **Responsive navbar** using Bootstrap's collapse component for the mobile menu
- **Tabbed menu** (Cold-Pressed Juices, Super Smoothies, Power Shots, Chef Snacks) built with Bootstrap's nav-pills and tab-pane system, 24 items total across four categories, each with its own copy, pricing by size, and image
- **Newsletter signup form** with real client-side JavaScript:
  - Live email validation on every keystroke using a regex test, not just on submit
  - The submit button stays disabled until the email looks valid
  - A mock success message on submit, since there's no backend, clearly labeled as a demo
- Custom button, card, and badge styling layered on top of Bootstrap's defaults
- Fully responsive across mobile, tablet, and desktop

## Tech stack

HTML, CSS, [Bootstrap 5](https://getbootstrap.com/), and vanilla JavaScript for the newsletter form's validation logic.

## Running it locally

1. Clone the repo
2. Open `index.html` in a browser, or serve the folder with any static server

No build step, no install step, Bootstrap is loaded from a CDN.

## Project structure

```
├── index.html
├── index.js        # newsletter form validation
├── styles.css       # custom theming on top of Bootstrap
└── images/
```

## Notes

Pulp & Peel is not a real business. This project focuses on layout and Bootstrap fluency rather than JavaScript depth, that's what my later projects (Which Star Are You, Bloom & Co.) build on.