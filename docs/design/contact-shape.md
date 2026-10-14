# Contact — Light Terminal

- **Job and audience:** clients and recruiters can email Riccardo, visit LinkedIn, or send a short message. Visitor mode: Operate.
- **Direction:** preserve the current exploratory Light Terminal world. Email is the primary channel, revealed through a “Show email” button; LinkedIn is secondary. At 850px and above, channels occupy the narrower left column and the form the wider right column, separated by a thin rule. Below 850px, use email → LinkedIn → form order.
- **Form:** required name, email and message, explicit labels, native browser validation, visible keyboard focus, resizable textarea, flat mint submit button. Static POST via Netlify Forms with hidden honeypot; no JavaScript for form submission. A small script reveals the encoded email after a click and moves focus to its mailto link; without JavaScript the form and LinkedIn remain available.
- **Feedback:** accepted submissions navigate to `/contact/thanks/`, with the shared frame, a short confirmation and a return link. Network/service errors use native handling, without custom success feedback.
- **Boundaries:** English copy, existing colors/fonts, no new assets, animation, dependencies, attachments, CAPTCHA, or response-time claims. Preserve other pages and design backups.
