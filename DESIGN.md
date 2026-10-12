---
name: Light Terminal
description: A clear, technical, and personal visual direction for Riccardo D'Angelo's portfolio.
colors:
  ink: "#183e48"
  paper: "#f4f7e9"
  surround: "#d5eee5"
  panel: "#d0eadf"
  action: "#c5f3e8"
  blue: "#3252c4"
  pink: "#d82e6b"
  divider: "#82aaa0"
typography:
  display:
    fontFamily: "VT323, monospace"
    fontSize: "clamp(4rem, 10vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.9
  body:
    fontFamily: "Atkinson, Arial, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "VT323, monospace"
    fontWeight: 400
components:
  action-link:
    backgroundColor: "{colors.action}"
    textColor: "{colors.ink}"
    padding: ".65rem .9rem"
---

# Design System: Light Terminal

## Overview

**Creative North Star: "Light Terminal"**

The current working direction is clear, technical, and personal. Terminal prompts and monospace display text give the site character; generous pale space and readable body type keep the professional story easy to follow. This direction remains exploratory alongside the README and Web90 backups.

**Key Characteristics:** pale green surfaces, dark teal text, blue section labels, sparing pink prompt accents, and flat outlined controls.

## Colors

The paper and surrounding mint establish the light setting. Ink carries body text and structural borders. Blue marks section headings and prompts; pink marks prompt characters and the current navigation underline. The action tint distinguishes links that look like buttons.

## Typography

VT323 carries navigation, large headings, prompts, and terminal-style labels. Atkinson carries paragraphs and other continuous reading. The About page uses a large lowercase page title, blue section headings, and body copy with a comfortable line height.

## Layout

The central page is at most 1280px wide, with a dark border on each side. The shared header and footer frame the content. About, CV, and Contact use generous page padding. At 850px and wider, the About introduction places the framed portrait at left and the title and introduction at right; later editorial sections place headings in a narrow left column and copy in a wider right column. Below that breakpoint, the content follows document order in one column. The header stacks on screens narrower than 700px.

## Elevation & Depth

The direction is flat. Borders and changes in surface color separate regions; the current pages do not use shadows.

## Shapes

Page edges and controls are square. Two-pixel dark borders define the page, header, and prominent actions; lighter one-pixel rules divide editorial sections. The About portrait uses a two-pixel blue square frame on a mint fill, with a small pink corner accent.

## Components

Navigation uses VT323 text, a blue hover treatment, and a pink underline for the current page. Action links use a pale mint fill and dark border, reversing to dark ink and white text on hover. The shared footer and “next” navigation continue the terminal vocabulary.

## Do's and Don'ts

### Do:

- **Do** keep readable body copy in Atkinson and reserve VT323 for display and terminal labels.
- **Do** preserve keyboard focus, clear contrast, and the single-column mobile reading order.

### Don't:

- **Don't** add shadows, rounded cards, or new hues while refining this direction.
- **Don't** treat this exploratory direction as a final choice over the saved alternatives.
