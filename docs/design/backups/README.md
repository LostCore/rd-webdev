# Design backups — 11 October 2026

`readme/` and `web90/` contain frozen copies of each design's Eleventy template, CSS and desktop/mobile previews before Light Terminal became the active homepage. These are source backups, separate from the live `/readme/` and `/web90/` routes.

To restore a design, copy its `index.njk` into the matching `src/` directory and its CSS into `src/assets/`. The templates also use the shared `src/_includes/base.njk`, `src/_data/profile.json` and local fonts in `src/assets/fonts/`; those shared files are not duplicated here. The preview PNGs show the saved design state.
