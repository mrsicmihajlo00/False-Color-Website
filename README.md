# false-color.com — Mihajlo Mršić Portfolio

## File Structure

```
false-color/
├── index.html          ← Landing page (project grid)
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── main.js         ← Nav, back-to-top, year (runs on every page)
│   ├── projects.js     ← ALL PROJECT DATA — edit this to add/change projects
│   ├── project-page.js ← Renders the individual project page
│   └── contact.js      ← EmailJS contact form handler
├── pages/
│   ├── project.html    ← Single project view (video + "you may also like")
│   ├── about.html      ← About page
│   └── contact.html    ← Contact page
└── redirect.html       ← Drop this at mihajlomrsic.com root to redirect → false-color.com
```

## How to Add / Edit Projects

Open `js/projects.js` — every project is one object in the `PROJECTS` array.

```js
{
  id: "my-project",           // unique slug — used in URLs (?id=my-project)
  title: "My Project Title",
  type: "COMMERCIAL",         // shown as label above title
  thumb: "URL to thumbnail image",
  platform: "youtube",        // youtube | vimeo | instagram | facebook
  embed: "VIDEO_ID",          // YouTube/Vimeo: video ID only
                              // Instagram/Facebook: full iframe src URL
  description: "Description text shown on the project page.",
  related: ["id1", "id2", "id3"]  // IDs of projects shown in "You May Also Like"
}
```

### YouTube thumbnail
Use: `https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg`

### Vimeo thumbnail
Grab the thumbnail URL from vimeo.com or your dashboard.

### Instagram embed src
`https://www.instagram.com/p/POST_SHORTCODE/embed/`

### Facebook embed src
`https://www.facebook.com/plugins/video.php?href=PERCENT_ENCODED_VIDEO_URL`

## Redirect (mihajlomrsic.com → false-color.com)

Upload `redirect.html` as `index.html` to your mihajlomrsic.com root.
The page uses both `window.location.replace()` and `<meta http-equiv="refresh">` as fallback,
so it works even if JavaScript is disabled.

For a cleaner server-side redirect (preferred), add this to your `.htaccess` on mihajlomrsic.com:
```
Redirect 301 / https://false-color.com/
```
Or in Nginx:
```
return 301 https://false-color.com$request_uri;
```

## Favicon
Replace `Profilna2.jpeg` in the root with your new icon image.
Update the `<link rel="icon">` href in all HTML files if you rename the file.

## EmailJS
The contact form uses your existing EmailJS keys. If you need to update them:
- `publicKey` in `js/contact.js`
- `service_h0un01o` and `template_iwgzydk` in `js/contact.js`
