# OC Mathematical Reasoning Practice T1

Static practice paper for Shreya.

## Open locally

```
python3 -m http.server 8765
```

Then visit http://localhost:8765/

Or double-click `index.html`.

## GitHub Pages

This folder is the site root (includes `.nojekyll`). From this directory:

```
git init
git add .
git commit -m "OC math practice T1"
gh auth login
gh repo create shreya-oc-math --public --source=. --remote=origin --push
gh repo edit --enable-pages --pages-branch=main
```

The live URL will be `https://<user>.github.io/shreya-oc-math/`.
