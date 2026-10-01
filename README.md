# Andrew L Smith — personal website

Plain HTML, CSS, and JavaScript, integrated from `academic-website-prototype.zip`.
There is no dependency installation or build step. No analytics, external fonts,
or remotely hosted images are used.

## Publishing and editing

GitHub Pages currently publishes the **root of `main`** at
<https://e46df133eed7d67b.github.io/>. The ZIP's `dist/` contents are placed directly
at that root: the homepage is `index.html`, not `dist/index.html`.
No custom domain is configured in Pages, and no `CNAME` or deployment workflow
exists. This integration does not change Pages settings or DNS.

- Edit `index.html`, `research.html`, `teaching.html`, `cv.html`,
  `photography.html`, and `contact.html` directly.
- Shared styles are in `style.css`; reading preferences are in `theme.js`.
- Images and PDFs from the prototype are in `assets/`.
- See [EDITING.md](EDITING.md) for the adapted prototype editing guide.
- Preview from the repository root with `python -m http.server 8765`.

The previous implementation's `_src/`, `assets/site.css`, `assets/site.js`,
`assets/images/`, and `assets/favicon.svg` remain for reference. **Do not run
`_src/build.py`**: it generates the previous design and would overwrite the new
homepage and compatibility pages. The prototype HTML is now the source of truth.

Navigation, downloads, and the portrait work without JavaScript. The appearance
and text-size controls store preferences only in the visitor's browser.
Relative URLs work at the repository Pages root and at a future custom-domain
root without adding a domain-specific base URL.

## Existing URL compatibility

These directory index pages redirect to the prototype and include ordinary links
as a fallback. Static hosting may first redirect the unslashed path to its slash
form.

| Existing path | Prototype destination |
| --- | --- |
| `/` | `/index.html` |
| `/pagecv` | `/cv.html` |
| `/research` | `/research.html` |
| `/teaching` | `/teaching.html` |
| `/photography` | `/photography.html` |
| `/contact-info` | `/contact.html` |

All five existing PDF files under `/s/` are preserved byte for byte:

- `/s/SMITH-PRIMARY-2026.pdf`
- `/s/CV-Aug-2026-no-cell.pdf`
- `/s/Why-Must-There-Be-an-Ideal-of-Beauty-forthcoming.pdf`
- `/s/Introduction-to-Ethics-FA24.pdf`
- `/s/Phil-2310-Spring-2014-Syllabus.pdf`

The prototype also includes its own PDF filenames under `/assets/`; those links
are retained. The existing `.nojekyll` is preserved.

## Review before merging or switching a domain

The prototype's wording, layout, photographs, and credits are retained. Review:

- The publication marked **forthcoming**.
- The CV current **as of August 2026** and the PhD date.
- Email **alsmit10@illinois.edu**, office **202A Gregory Hall**, and the mailing
  address **200 Gregory Hall, MC-468, 810 S. Wright St., Urbana, IL 61801**.
- The prototype links to **photos.asmith.be**. The hostname did not resolve
  during validation; review this link before relying on it as a gallery.
- Instagram profile contents could not be independently confirmed because the
  service restricted automated access.

The Photography page follows the supplied prototype: it contains links rather
than an embedded gallery. The prototype includes berries, petal, and rainfall
image files that are not displayed by its pages. The previous curated photographs
and credits remain in the archived source and image files.

Merging this PR into `main` will allow the existing Pages configuration to publish
it. Review the PR first. Any later custom-domain setup and DNS switch are separate
steps; neither is performed here.
