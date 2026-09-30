# Andrew L Smith — personal website

Static GitHub Pages replacement for the former Squarespace site at `asmith.be`.
It has no framework, external font, analytics, cookie banner, or remote image dependency.

## Editing and building

- Edit page content in `_src/pages/`.
- Edit shared navigation, titles, and descriptions in `_src/build.py`; shared HTML is in `_src/layout.html`.
- Edit presentation in `assets/site.css` and the mobile menu in `assets/site.js`.
- Run `python _src/build.py` and commit the generated `index.html` files with the source. Python's standard library is sufficient. GitHub Pages serves the generated files directly.
- Preview from the repository root with `python -m http.server 8765`, then open `http://localhost:8765/`. Root-relative links need a server; opening an HTML file directly is not a valid preview.

No `CNAME` file is present. This checkout does not change DNS or switch the domain.

## Old URL coverage

| Former URL path | Local file |
| --- | --- |
| `/` | `index.html` |
| `/pagecv` | `pagecv/index.html` |
| `/research` | `research/index.html` |
| `/teaching` | `teaching/index.html` |
| `/photography` | `photography/index.html` |
| `/contact-info` | `contact-info/index.html` |
| `/s/SMITH-PRIMARY-2026.pdf` | same path |
| `/s/CV-Aug-2026-no-cell.pdf` | same path |
| `/s/Why-Must-There-Be-an-Ideal-of-Beauty-forthcoming.pdf` | same path |
| `/s/Introduction-to-Ethics-FA24.pdf` | same path |
| `/s/Phil-2310-Spring-2014-Syllabus.pdf` | same path |

The page paths without a trailing slash resolve to the directory index and may redirect to the slash form on static servers. The five PDF filenames remain exact.

## Content to review before a domain switch

- The research page still calls “Why Must There Be an Ideal of Beauty?” **forthcoming**.
- The CV is still described as current **as of August 2026**. The linked PDF and Ph.D. date are copied from the old site.
- The office remains **202A Gregory Hall** and the mailing address remains **200 Gregory Hall, MC-468, 810 S. Wright St., Urbana, IL 61801**.
- The obfuscated email remains **alsmit10 at illinois dot edu**.
- The photography page retains the old wording about Instagram posts, but shows a curated set of five locally hosted photographs instead of the Squarespace gallery. The former gallery had more images, including some without titles or alternative text; this is a selection rather than a complete archive.

Photographs and PDFs were downloaded from the public `asmith.be` site on 2026-09-30. Original photo credits are retained in the visible captions for the Home, CV, Research, Teaching, and Contact Info images. The gallery captions retain the original titles. The Department of Philosophy, University of Illinois, and `@illinoisphilosophy` links were checked at migration time.

Before changing DNS, review the items above, enable GitHub Pages for the generated site if needed, and check the live Pages preview and the exact old URLs on that host. DNS and domain configuration are intentionally outside this migration.
