# Editing your website

The entire site is ordinary HTML and CSS. Each page is a real, editable file; nothing is generated when you save it. You can use any plain-text or code editor. A visual, drag-and-drop editor is not included.

## Start here

1. Clone or download this repository into a folder you will keep.
2. Open that folder in your editor.
3. Open `index.html` in your browser to preview the homepage. You can double-click the file; a local server is not required.
4. Edit a page in your editor, save it, then refresh the browser. Follow the navigation to view the other pages.

Save files as UTF-8 and retain their `.html` or `.css` extensions. Browser caches sometimes retain old styling; if a CSS change does not appear, use a hard refresh.

## Which file to edit

All page files are at the repository root.

| File | What it controls |
| --- | --- |
| `index.html` | Homepage introduction, portrait, and section links |
| `research.html` | Publications, works in progress, and dissertation |
| `teaching.html` | Courses and syllabus links |
| `cv.html` | Education and the full CV link |
| `photography.html` | Photography website and Instagram links |
| `contact.html` | Email, office, and mailing address |
| `style.css` | The shared appearance of every page |
| `theme.js` | The light/dark toggle, text-size slider, and saved preferences |
| `favicon.svg` | The small browser-tab icon |
| `assets/` | PDF documents and image files |

Look for `PAGE CONTENT` in an HTML file to find its main editable section. Comments beginning `<!--` explain the structure and do not appear on the website. HTML describes the content; CSS controls its appearance.

## Canonical domain and URL metadata

The canonical public URL is `https://asmith.be/`, hosted by GitHub Pages from the
root of `main`. Preserve the root `CNAME` file, which contains `asmith.be`.

Each page's head includes a `rel="canonical"` link and Open Graph URL metadata.
The homepage uses `https://asmith.be/`; other pages use their `.html` paths. Keep
these values and `sitemap.xml` aligned if a page is added or renamed. Compatibility
pages point their canonical links to the corresponding current page.
`robots.txt` references `https://asmith.be/sitemap.xml`.

Keep navigation and asset links relative. No domain-specific `<base>` element,
framework configuration, or DNS change is needed for ordinary repository edits.

## Change text

A paragraph looks like this:

```html
<p>
  Your paragraph goes here.
</p>
```

Replace the words between the opening and closing tags. To add a paragraph, copy a complete `<p> ... </p>` block. Do not put an entire paragraph inside another paragraph.

Use `<em>Book title</em>` for italics. Use `&amp;` for an ampersand, `&lt;` for a literal less-than sign, and `&gt;` for a literal greater-than sign. Ordinary apostrophes and quotation marks in paragraph text are fine.

## Change a link

```html
<a href="https://photos.asmith.be/">photos.asmith.be</a>
```

`href` is the destination. The words between the tags are what visitors see. Update both when needed. Keep the quotation marks around the destination. External websites should use a complete address beginning with `https://`.

An internal link uses a filename, such as `research.html`. Keep the existing relative links; they also work when the site is hosted in a GitHub Pages project folder.

An email link uses `mailto:`:

```html
<a href="mailto:alsmit10@illinois.edu">alsmit10@illinois.edu</a>
```

## Replace a PDF or the portrait

Put the new file in `assets/`. Then either keep the old filename to replace it directly, or update the relevant `href` or `src` to match the new filename. Use simple filenames such as `cv-october-2026.pdf`, with lowercase letters and hyphens.

For a new CV filename, update its link in `cv.html` and the “Current as of” date below it. For a new dissertation filename, update its links in both `cv.html` and `research.html`.

For the homepage photograph, find `HOMEPAGE PORTRAIT` in `index.html`. Update `src`, the `alt` description, and the caption. The `alt` description should briefly identify what the photograph shows.

## Add a publication

In `research.html`, find `PAPER ENTRY` under Publications. Copy the complete `<article class="paper"> ... </article>` block and place the copy immediately after the existing article, before the section's closing `</section>` tag. Then edit the title, reference, status, and PDF link.

For example:

```html
<article class="paper">
  <h3><a href="assets/new-paper.pdf">Title of the paper</a></h3>
  <p><em>Journal name</em>, volume, year, and pages.</p>
  <p class="meta">
    Published · <a href="assets/new-paper.pdf">Read paper (PDF)</a>
  </p>
</article>
```

For works in progress, add another `<li>Paper title</li>` inside the existing list.

## Add a course

In `teaching.html`, find `COURSE ENTRY`. Copy the whole `<div class="course"> ... </div>` block into the appropriate university section. Update the term, title, and syllabus link. The course block contains a smaller `div` inside it, so be sure to copy both closing `</div>` tags.

## Change navigation, name, or footer

Each page contains its own header and footer so that navigation works directly in a browser without a build process. These are labeled `SHARED HEADER` and `SHARED FOOTER`.

If you rename a navigation item, add a page, or change your name or footer email, make that same change in all six HTML files. Your editor's search across the folder can help. Keep `aria-current="page"` only on the navigation link for the page being edited; it marks the current page visually and for screen readers.

To add a page, copy an existing HTML file, change its `<title>` and `<h1>`, replace the main content, and update the navigation in every page.

## Adjust typography and colors

Open `style.css`. The settings at the top affect the entire site:

| Setting | Purpose |
| --- | --- |
| `--light-ink` / `--dark-ink` | Main text colors |
| `--light-muted` / `--dark-muted` | Secondary text colors |
| `--light-paper` / `--dark-paper` | Page backgrounds |
| `--light-rule` / `--dark-rule` | Thin dividing lines |
| `--light-hover` / `--dark-hover` | Link hover colors |
| `--light-focus` / `--dark-focus` | Keyboard focus outlines |
| `--sans` | Font throughout the site: currently Arial, with Helvetica and generic sans serif fallbacks |
| `--body-size` | Desktop paragraph size; currently `1.125rem` (18px at standard browser settings) |
| `--body-leading` | Paragraph line spacing; currently `1.65` |
| `--mobile-body-size` | Phone paragraph size; currently `1.0625rem` (17px at standard settings) |

The rest of the stylesheet has labeled sections for the homepage, publications, education, courses, contact details, and mobile layouts. Most content edits do not require CSS changes.

## Light and dark mode

Every page has a small sun/moon icon in its upper-right corner. Clicking it switches directly between light and dark mode, with no menu. The site follows the visitor's operating-system preference until they click the icon. After a click, the choice is saved in the visitor's browser and applies across pages and future visits. The icon reflects the current light or dark appearance. The choice is not sent to a server. If the browser disables storage, switching still works on the current page, but the preference cannot be saved.

The button, SVG icons, and text-size slider are contained in the commented `READING CONTROLS` block near the top of each HTML file. To change the SVG icons, repeat your edits in all six pages. The accessible button label and tooltip are updated by `theme.js` to describe the next action. The `READING CONTROLS` section of `style.css` controls the position and size. The icons are ordinary inline SVG, so no icon library or external asset is needed.

Both palettes are labeled at the top of `style.css`. Edit the `--light-...` and `--dark-...` settings there; leave the active-color references such as `--ink: var(--light-ink)` alone. The typography and layout are shared between modes. Printouts always use the light palette.

The small `theme.js` file handles the controls and remembers the preferences. You do not need to edit it when changing content or colors. If JavaScript is disabled, the controls are hidden and the site still follows the operating-system appearance through CSS.

## Reading text size

The visible A− / A+ slider changes reading text immediately, from 75% to 130% of its usual size. Its default is 100%. Headings, navigation, and the controls keep their usual sizes. On phones, the controls appear alongside the Philosophy line below the name, leaving room for the navigation.

The chosen size is saved in the visitor's browser under `asmith-text-size` and applies across pages and future visits. Arrow keys make small adjustments; Home and End select the minimum and maximum. Screen readers receive a label and the current percentage. If storage is disabled, the slider still works for the current page. Print uses the standard text sizes.

To change the usual paragraph size, edit `--body-size` and `--mobile-body-size` in `style.css`. The slider applies a multiplier to those settings. To change the slider limits, update the `min` and `max` attributes in all six HTML files and the matching limits in `readTextSize()` in `theme.js`.

When opening HTML files directly from disk, some browsers do not share saved preferences between files. The preference works across pages when previewed through a local server or served by GitHub Pages. Direct-file previews remain usable in either mode.

## Check your changes

- Refresh the edited page and read it through.
- Click any links you changed, including PDFs.
- Make the browser window narrow to check the phone layout.
- Use the Tab key to check that navigation and links remain reachable.

## Publishing later

The six root HTML files and their shared CSS, JavaScript, favicon, and assets are the complete website. GitHub Pages publishes them at `https://asmith.be/` from the root of `main`. Keep the HTML files, `style.css`, `theme.js`, `favicon.svg`, and `assets/` together. The `.openai` folder is reserved for the Sites preview and is not needed for manual editing or GitHub Pages.

Saving a local file updates your local preview. Submit edits on a branch and review the pull request before merging into `main`; the existing Pages configuration publishes `main`. Keep the compatibility directories and existing `/s/` PDFs. See README.md for the publishing configuration and legacy-source warning.
