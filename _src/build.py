"""Build the dependency-free static pages committed for GitHub Pages."""

from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE = Path(__file__).resolve().parent
LAYOUT = (SOURCE / "layout.html").read_text(encoding="utf-8")

PAGES = [
    ("Home", "", "Philosophy, research, teaching, and photography by Andrew L Smith."),
    ("CV", "pagecv", "Education, dissertation, and full CV for Andrew L Smith."),
    ("Research", "research", "Publications and works in progress by Andrew L Smith."),
    ("Teaching", "teaching", "Teaching experience and course syllabuses by Andrew L Smith."),
    ("Photography", "photography", "Selected photography by Andrew L Smith."),
    ("Contact Info", "contact-info", "Email and mailing information for Andrew L Smith."),
]

for title, slug, description in PAGES:
    nav = "\n".join(
        f'      <a href="/{other_slug}"'
        + (' aria-current="page"' if other_slug == slug else "")
        + f">{escape(other_title)}</a>"
        for other_title, other_slug, _ in PAGES
    )
    source_name = slug or "home"
    content = (SOURCE / "pages" / f"{source_name}.html").read_text(encoding="utf-8").strip()
    page = (
        LAYOUT.replace("{{title}}", escape(title))
        .replace("{{description}}", escape(description, quote=True))
        .replace("{{navigation}}", nav)
        .replace("{{content}}", "    " + content.replace("\n", "\n    "))
    )
    destination = ROOT / slug / "index.html" if slug else ROOT / "index.html"
    destination.parent.mkdir(parents=True, exist_ok=True)
    destination.write_text(page, encoding="utf-8")
    print(destination.relative_to(ROOT))
