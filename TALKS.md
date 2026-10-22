# Maintaining the unlinked Talks section

The section uses plain directory indexes:

- `talks/index.html` — `https://asmith.be/talks/`
- `talks/exp-26/index.html` — `https://asmith.be/talks/exp-26/`
- `talks/exp-26/handout/index.html` — `https://asmith.be/talks/exp-26/handout/`

The two new site pages reuse the current HTML structure, existing `style.css`,
`theme.js`, favicon, main navigation, footer, and reading controls. Root-relative
asset and navigation paths work at each nested URL. There is no new CSS,
framework, generator, or dependency. The six principal pages and all their
existing assets are unchanged.

To add a future talk, copy the EXP landing page into its own lowercase directory,
update its title, date, description, metadata, materials link, and back link, and
add a list item in `talks/index.html` (most recent first). Keep heading levels
logical. Preserve the shared controls and header. No principal navigation item
has `aria-current` on a Talks page, since none is the current page.

Every new HTML page in this section needs its own canonical URL and
`<meta name="robots" content="noindex">`. Do not add the section to navigation,
the homepage, footer, other established site pages, or `sitemap.xml`. Do not
disallow it in `robots.txt`. Noindex is not access control.

## Updating the handout

The source remains in the separate `e46df133eed7d67b/EXP-26-Handout` repository.
Do not maintain or edit a second QMD or handout HTML here. In that repository:

```powershell
quarto render index.qmd
.\Sync-WebsiteHandout.ps1 -WebsiteRoot 'C:\path\to\e46df133eed7d67b.github.io' -WhatIf
.\Sync-WebsiteHandout.ps1 -WebsiteRoot 'C:\path\to\e46df133eed7d67b.github.io'
```

Review the generated website diff, preview all three URLs on an HTTP server,
then use the normal approval/review process before committing or publishing.
The script copies the rendered dependency tree only into `talks/exp-26/handout/`,
verifies noindex and canonical metadata, and never deletes files or writes to the
two Talks landing pages. See `PUBLISHING.md` in the handout repository for the
complete workflow and limitations. Do not run archived `_src/build.py`.

## First publication and old URL

No commit, push, deployment, DNS, or Pages setting change was made as part of the
local preparation. After approval, publish this website first and verify the new
handout. The handout repository has a prepared `docs/index.html` redirect, isolated
from Quarto renders. After its files are committed/pushed with approval, a separate
approved change of **that repository's** Pages source from `main / (root)` to
`main /docs` activates the redirect at `/EXP-26-Handout/`. Leave this website's
Pages source and custom domain untouched.

The unchanged EXP localStorage keys work across paths on `https://asmith.be` in
the same browser/profile. Use different document identifiers and storage keys
for future talks. No accounts or synchronization service were added.
