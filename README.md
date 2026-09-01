# For Jaaanu 💌 — a pastel scrapbook birthday site

## 1. Add your content
Open **`script.js`** and edit the `SITE_CONTENT` object at the very top.
Every `[bracketed placeholder]` is something to replace with real text —
her intro, your timeline, little things, quiz answers, letters, and the
final letter. Nothing else in the file needs to change.

## 2. Add your photos
Drop image files into `assets/images/` using the filenames already
referenced in `SITE_CONTENT.gallery` (`memory-01.jpg`, etc.) and
`her-portrait.jpg`. Until a real photo exists at that path, a soft pastel
placeholder shows instead — nothing breaks either way.

## 3. Add music (optional)
Put an MP3 at `assets/audio/song.mp3`. It only plays if she taps the music
button herself — never automatically.

## 4. Preview it locally
Open `index.html` directly in a browser, or run:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## 5. Deploy for free
**GitHub Pages:** push this folder's contents to a repo (files at the root,
not inside a subfolder), then Settings → Pages → deploy from `main` branch,
root folder.

**Netlify Drop:** go to app.netlify.com/drop and drag the folder in for an
instant link.

## File structure
```
jaaanu-cute/
├── index.html    → page structure
├── style.css     → pastel scrapbook design system
├── script.js     → SITE_CONTENT (your words) + site behavior
├── assets/
│   ├── images/   → her portrait + gallery photos
│   └── audio/    → optional background song
└── README.md
```
