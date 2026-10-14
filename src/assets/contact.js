const revealButton = document.querySelector('.contact-reveal');
const emailLink = document.getElementById('contact-address');

revealButton.hidden = false;
document.getElementById('contact-fallback').hidden = true;
revealButton.addEventListener('click', () => {
  // shortcut: reversible encoding only deters simple scrapers; use a form-only route if stronger privacy is needed.
  const email = atob(revealButton.dataset.email);
  emailLink.textContent = email;
  emailLink.href = `mailto:${email}`;
  emailLink.hidden = false;
  revealButton.hidden = true;
  emailLink.focus();
}, { once: true });
