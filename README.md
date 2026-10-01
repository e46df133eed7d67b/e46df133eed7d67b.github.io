# Andrew L Smith — personal website

Plain HTML, CSS, and JavaScript, integrated from `academic-website-prototype.zip`.
There is no dependency installation or build step. No analytics, external fonts,
or remotely hosted images are used.

## Publishing and editing

The canonical public URL is <https://asmith.be/>. GitHub Pages publishes the
**root of `main`** using branch publishing. The root `CNAME` contains `asmith.be`,
and HTTPS is enforced in Pages. The GitHub Pages hostname redirects to the custom
domain. No checked-in deployment workflow or build step is needed.

The ZIP's `dist/` contents are placed directly at that root: the homepage is
`index.html`, not `dist/index.html`. Domain and DNS settings are managed separately;
repository maintenance must preserve `CNAME` and must not change DNS.

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
Relative page and asset URLs work at the custom-domain root and remain compatible
with GitHub Pages hosting. They do not need a domain-specific `<base>` element.

## Canonical URLs and discovery

Each of the six public pages declares a canonical URL and an Open Graph URL on
`https://asmith.be`. The homepage canonical is `/`, including when opened as
`/index.html`. The other canonical paths use their existing `.html` filenames.
Compatibility pages declare the canonical destination while retaining their
relative redirects and fallback links.

`sitemap.xml` lists only these six canonical URLs; `robots.txt` points to
`https://asmith.be/sitemap.xml` and permits crawling. When adding or renaming a
page, keep its canonical metadata, Open Graph URL, and sitemap entry aligned.
The archived `_src/` generator is not part of publishing and has no base URL or
hostname configuration.

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

## Content review notes

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

Changes merged into `main` are published by the existing GitHub Pages configuration
at `https://asmith.be/`. Review changes in a pull request before merging. DNS changes
are outside repository maintenance.
