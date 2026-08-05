# Huda Imran — Portfolio

A single-page portfolio site: brand/design work, data & strategy work, and community work.

## File map

```
index.html     structure — you shouldn't need to touch this
style.css      all visual styling
script.js      renders content.js into the page, runs the scroll rail
content.js     ← YOUR CONTENT LIVES HERE. Edit this file to update the site.
assets/        logos and images used in the Design section
```

To change any text, stat, project, or link: open `content.js`, edit the value, save.
To add a new design project: copy one of the objects in the `design: [ ... ]` array in
`content.js`, change the fields, and drop the image into `/assets`.

## Publish it on GitHub Pages (free hosting)

1. **Create a repo named exactly `hudairr.github.io`** on your GitHub account (`hudairr`).
   This exact name is what makes GitHub serve it automatically at
   `https://hudairr.github.io` — it doesn't work with any other repo name.
   *(Note: `hudairr.github.com` isn't a real GitHub Pages address — the domain is
   always `.github.io`, not `.github.com`.)*

2. Upload these files (`index.html`, `style.css`, `script.js`, `content.js`, and the
   `assets/` folder) to the root of that repo — either by dragging them into the GitHub
   web UI ("Add file → Upload files") or via git:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/hudairr/hudairr.github.io.git
   git push -u origin main
   ```

3. In the repo, go to **Settings → Pages**. Under "Build and deployment", set
   **Source: Deploy from a branch**, branch **main**, folder **/(root)**. Save.

4. Your site goes live in a minute or two at **https://hudairr.github.io**.

## Using a real custom domain instead (optional)

If you buy an actual domain (e.g. `hudaimran.com`) later:
1. Add a file named `CNAME` (no extension) to the repo root containing just the domain,
   e.g. `hudaimran.com`.
2. Point your domain's DNS at GitHub Pages (an `A` record set or a `CNAME` record to
   `hudairr.github.io`, depending on whether it's an apex domain or a subdomain —
   GitHub's own Pages docs walk through both).
3. In Settings → Pages, add the custom domain and enable "Enforce HTTPS" once it verifies.

## Updating content later

Every time you edit `content.js` and push to `main`, GitHub Pages rebuilds automatically —
no build step, no deploy command. That's the whole workflow.
