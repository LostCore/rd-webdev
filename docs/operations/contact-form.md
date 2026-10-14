# Contact form on Netlify

The static `contact` form posts to `/contact/thanks/`. Form submission needs no client JavaScript or custom backend. The separate email-reveal button uses a small script and reversible encoding to deter simple scrapers; it is not an antispam guarantee. The shared HTML comment contains no address.

1. In the site's Netlify **Forms** panel, enable form detection before deploying the form.
2. Deploy and confirm that the `contact` form appears with `name`, `email`, and `message` fields.
3. Under **Forms → Submission notifications**, add an email notification for `contact` to `me@riccardodangelo.com`. The submitter's `email` is used as Reply-To.
4. Submit an agreed test message on the deployed site. Check the confirmation page, the Forms submission, notification delivery (including spam folder), and Reply-To.
5. Review Forms usage and spam submissions in Netlify if delivery issues occur.

Local Eleventy and the test HTTP server do not process form submissions. Local tests verify the generated markup and mock the POST response; they do not prove Netlify delivery. A successful confirmation means the submission was accepted, not that the notification reached the inbox.

References: [Setup](https://docs.netlify.com/manage/forms/setup/), [Notifications](https://docs.netlify.com/manage/forms/notifications/), [Spam filters](https://docs.netlify.com/manage/forms/spam-filters/).

The English routes are `/contact/` and `/contact/thanks/`. Netlify permanently redirects the previous `/contatti/` routes; verify both redirects after deployment.
