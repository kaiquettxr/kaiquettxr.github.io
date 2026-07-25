#!/usr/bin/env node
/*
 * Generates fully static, crawlable project pages at /projects/{slug}/index.html
 * from the single source of truth in projects.js.
 *
 * Why this exists (SEO/AEO finding from squad "Scope AI Crescimento", ciclo 2026-07-24):
 * the old project.html?p={slug} template rendered title/meta description/H1/gallery
 * entirely via client-side JavaScript, so crawlers that don't execute JS (and many AI
 * answer engines) saw an empty shell. These generated pages contain the real content
 * in the HTML itself — no JavaScript required to read title, description, H1, blurb,
 * or the full photo gallery. project.html?p={slug} still works as a fallback and now
 * sets its canonical tag to point here, consolidating SEO signal to one URL per project.
 *
 * Re-run this script (`node scripts/generate-projects.js` from the repo root) any time
 * projects.js changes — the generated files are build output, not hand-edited.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const src = fs.readFileSync(path.join(ROOT, 'projects.js'), 'utf8');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(src + '\nthis.__PROJECTS__ = PROJECTS;', sandbox);
const PROJECTS = sandbox.__PROJECTS__;

const catColors = { sports: '#5C8AA6', brand: '#F2A93B', music: '#A5556A', events: '#8A8F98' };
const catLabels = { sports: 'Sports', brand: 'Brand & Commercial', music: 'Music & Entertainment', events: 'Events & Personal' };

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function metaDescriptionFor(p) {
  var base = p.blurb || (p.name + ' — ' + catLabels[p.category] + ' production by Kaique Teixeira, Scope Studios, Rio de Janeiro.');
  return base.length > 160 ? base.slice(0, 157) + '...' : base;
}

const STYLE = `
  :root{
    --ink-950:#101114; --ink-900:#1A1C20; --ink-800:#25282E; --line:#3A3D44;
    --paper:#F1EEE6; --text-hi:#F5F3EC; --text-mid:#B7B9BE;
    --amber:#F2A93B; --red:#E1483D; --steel:#5C8AA6; --wine:#A5556A; --graphite:#8A8F98;
  }
  *{box-sizing:border-box; margin:0; padding:0;}
  html{scroll-behavior:smooth;}
  @media (prefers-reduced-motion: reduce){
    html{scroll-behavior:auto;}
    *{animation-duration:0.001ms !important; animation-iteration-count:1 !important; transition-duration:0.001ms !important;}
  }
  body{ background:var(--ink-950); color:var(--text-hi); font-family:'Inter',sans-serif; line-height:1.5; overflow-x:hidden; }
  .mono{ font-family:'JetBrains Mono', monospace; }
  .display{ font-family:'Anton', sans-serif; text-transform:uppercase; letter-spacing:0.01em; }
  a{ color:inherit; text-decoration:none; }
  img{ max-width:100%; display:block; }
  .wrap{ max-width:1180px; margin:0 auto; padding:0 28px; }
  .wrap-narrow{ max-width:820px; margin:0 auto; padding:0 28px; }

  header.nav{ position:fixed; top:0; left:0; right:0; z-index:100; background:rgba(16,17,20,0.9); backdrop-filter:blur(8px); border-bottom:1px solid var(--line); }
  .nav-inner{ max-width:1180px; margin:0 auto; padding:14px 28px; display:flex; align-items:center; justify-content:space-between; }
  .nav-logo{ font-size:15px; letter-spacing:0.12em; }
  .nav-logo b{ color:var(--amber); }
  .back-link{ font-size:12px; letter-spacing:0.08em; color:var(--text-mid); transition:color .2s; }
  .back-link:hover{ color:var(--text-hi); }

  .p-hero{ position:relative; min-height:70vh; display:flex; flex-direction:column; justify-content:flex-end; padding:140px 0 60px; background:var(--ink-900); overflow:hidden; }
  .p-hero-media{ position:absolute; inset:0; z-index:0; }
  .p-hero-media img{ width:100%; height:100%; object-fit:cover; object-position:center 22%; }
  .p-hero-media::after{ content:''; position:absolute; inset:0; background:linear-gradient(180deg, rgba(16,17,20,0.15) 0%, rgba(16,17,20,0.55) 55%, var(--ink-950) 100%); }
  .p-hero-inner{ position:relative; z-index:1; }
  .tag{ display:inline-flex; align-items:center; gap:7px; font-size:10px; letter-spacing:0.1em; text-transform:uppercase; padding:6px 10px; border:1px solid var(--line); width:fit-content; margin-bottom:20px; color:var(--text-mid); background:rgba(16,17,20,0.55); backdrop-filter:blur(4px); }
  .tag .sq{ width:7px; height:7px; }
  .p-hero h1{ font-size:clamp(36px,7vw,76px); line-height:0.98; margin-bottom:14px; text-shadow:0 2px 24px rgba(0,0,0,0.4); }
  .p-meta{ font-size:12px; color:var(--text-mid); letter-spacing:0.06em; margin-bottom:20px; }
  .p-blurb{ max-width:640px; font-size:15.5px; color:var(--text-hi); line-height:1.65; opacity:0.92; }

  .video-section{ padding:60px 0 0; }
  .video-wrap{ position:relative; width:100%; aspect-ratio:16/9; background:var(--ink-900); border:1px solid var(--line); }
  .video-wrap iframe{ width:100%; height:100%; border:0; }

  .gallery-section{ padding:60px 0 20px; }
  .gallery-label{ font-size:11px; letter-spacing:0.14em; color:var(--text-mid); text-transform:uppercase; margin-bottom:22px; }
  .gallery{ display:grid; grid-template-columns:repeat(6,1fr); gap:14px; }
  .gallery-item{ display:block; overflow:hidden; border:1px solid var(--line); position:relative; background:var(--ink-900); grid-column:span 3; aspect-ratio:4/3; }
  .gallery-item.wide{ grid-column:span 6; aspect-ratio:16/9; }
  .gallery-item.tall{ grid-column:span 2; aspect-ratio:3/4; }
  .gallery-item.med{ grid-column:span 3; aspect-ratio:1/1; }
  .gallery-item img{ width:100%; height:100%; object-fit:cover; border:0; display:block; transition:transform .5s cubic-bezier(.2,.7,.2,1); }
  .gallery-item:hover img{ transform:scale(1.06); }
  @media (max-width:760px){
    .gallery{ grid-template-columns:repeat(2,1fr); }
    .gallery-item, .gallery-item.tall, .gallery-item.med{ grid-column:span 1; aspect-ratio:4/3; }
    .gallery-item.wide{ grid-column:span 2; }
  }

  .empty-state{ border:1px dashed var(--line); padding:60px 30px; text-align:center; color:var(--text-mid); font-size:13px; letter-spacing:0.04em; margin:20px 0 60px; }
  .empty-state b{ display:block; color:var(--text-hi); font-family:'JetBrains Mono',monospace; letter-spacing:0.1em; margin-bottom:10px; font-size:12px; }

  .also-like{ padding:80px 0 110px; border-top:1px solid var(--line); margin-top:60px; }
  .also-like h2{ font-size:13px; letter-spacing:0.14em; color:var(--text-mid); text-transform:uppercase; margin-bottom:26px; }
  .also-grid{ display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
  .also-card{ border:1px solid var(--line); overflow:hidden; transition:border-color .25s, transform .25s; position:relative; display:block; }
  .also-card-media{ position:relative; aspect-ratio:4/3; background:var(--ink-900); overflow:hidden; }
  .also-card-media img{ width:100%; height:100%; object-fit:cover; transition:transform .5s cubic-bezier(.2,.7,.2,1); }
  .also-card:hover .also-card-media img{ transform:scale(1.08); }
  .also-card-body{ padding:16px 18px 18px; }
  .also-card h4{ font-size:15px; margin:6px 0 6px; transition:color .2s; }
  .also-card:hover h4{ color:var(--amber); }
  .also-card .meta{ font-size:10px; color:var(--text-mid); font-family:'JetBrains Mono',monospace; letter-spacing:0.06em; }
  .also-card:hover{ border-color:var(--amber); transform:translateY(-4px); }

  .wa-fab{ position:fixed; right:18px; bottom:18px; z-index:200; width:52px; height:52px; border-radius:50%; background:#25D366; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 16px rgba(0,0,0,0.35); }
  .wa-fab svg{ width:26px; height:26px; }

  footer{ background:var(--ink-950); border-top:1px solid var(--line); padding:26px 0; }
  .foot-inner{ display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px; font-size:11px; color:var(--text-mid); letter-spacing:0.05em; }
  .foot-inner a{ transition:color .2s; }
  .foot-inner a:hover{ color:var(--amber); }

  @media (max-width:640px){ .also-grid{ grid-template-columns:1fr; } }
`;

function render(p, allProjects) {
  const others = allProjects.filter(function (x) { return x.slug !== p.slug; });
  others.sort(function (a, b) {
    return (a.category === p.category ? 0 : 1) - (b.category === p.category ? 0 : 1);
  });
  const picks = others.slice(0, 3);
  const desc = metaDescriptionFor(p);
  const catLabel = catLabels[p.category] || p.category;
  const catColor = catColors[p.category] || '#8A8F98';

  let bodyHTML = '';
  let hasMedia = false;

  const videos = p.videos || (p.video ? [p.video] : []);
  if (videos.length) {
    hasMedia = true;
    videos.forEach(function (v, vi) {
      bodyHTML += '<section class="video-section"><div class="wrap-narrow">'
        + (videos.length > 1 ? '<div class="gallery-label mono">Video ' + (vi + 1) + ' of ' + videos.length + '</div>' : '')
        + '<div class="video-wrap"><iframe src="' + esc(v) + '" title="' + esc(p.name) + ' video ' + (vi + 1) + '" allowfullscreen loading="lazy"></iframe></div></div></section>';
    });
  }

  const images = (p.images && p.images.length) ? p.images : [];
  if (images.length) {
    hasMedia = true;
    const sizeCycle = ['med', 'wide', 'tall', 'med', 'med', 'wide', 'tall', 'med'];
    bodyHTML += '<section class="gallery-section"><div class="wrap">';
    bodyHTML += '<div class="gallery-label mono">Gallery — ' + images.length + ' photo' + (images.length > 1 ? 's' : '') + '</div>';
    bodyHTML += '<div class="gallery">';
    images.forEach(function (src, i) {
      const sizeClass = sizeCycle[i % sizeCycle.length];
      bodyHTML += '<div class="gallery-item ' + sizeClass + '">'
        + '<img src="' + esc(src) + '" loading="lazy" alt="' + esc(p.name + ' — ' + catLabel + ' production, photo ' + (i + 1) + ' of ' + images.length) + '"></div>';
    });
    bodyHTML += '</div></div></section>';
  }

  if (!hasMedia && !p.cover) {
    bodyHTML += '<div class="wrap"><div class="empty-state mono"><b>NO SIGNAL</b>Gallery coming soon.</div></div>';
  }

  let alsoHTML = '';
  picks.forEach(function (o) {
    const mediaHTML = o.cover ? '<img src="' + esc(o.cover) + '" alt="' + esc(o.name) + '" loading="lazy">' : '';
    alsoHTML += '<a class="also-card" href="/projects/' + esc(o.slug) + '/">'
      + '<div class="also-card-media">' + mediaHTML + '</div>'
      + '<div class="also-card-body">'
      + '<div class="tag mono" style="margin-bottom:0;"><span class="sq" style="background:' + catColors[o.category] + '"></span>' + esc(catLabels[o.category]) + '</div>'
      + '<h4>' + esc(o.name) + '</h4>'
      + '<div class="meta">' + esc(o.year) + '</div>'
      + '</div></a>';
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: p.name,
    description: desc,
    creator: { '@type': 'Person', name: 'Kaique Teixeira', url: 'https://kaiquettxr.github.io/' },
    about: catLabel,
    image: p.cover || undefined,
    dateCreated: p.year,
    publisher: { '@type': 'Organization', name: 'Scope Studios' }
  };

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(p.name)} | Kaique Teixeira — ${esc(catLabel)} — Scope Studios</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="https://kaiquettxr.github.io/projects/${esc(p.slug)}/">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<meta property="og:type" content="article">
<meta property="og:title" content="${esc(p.name)} | Kaique Teixeira — Scope Studios">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="https://kaiquettxr.github.io/projects/${esc(p.slug)}/">
${p.cover ? '<meta property="og:image" content="' + esc(p.cover) + '">' : ''}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(p.name)} | Kaique Teixeira — Scope Studios">
<meta name="twitter:description" content="${esc(desc)}">
${p.cover ? '<meta name="twitter:image" content="' + esc(p.cover) + '">' : ''}
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${STYLE}</style>
</head>
<body>

<header class="nav">
  <div class="nav-inner">
    <div class="nav-logo mono">KAIQUE<b>·</b>TEIXEIRA</div>
    <a class="back-link mono" href="/index.html#work">&larr; BACK TO WORK</a>
  </div>
</header>

<section class="p-hero" id="pHero">
  ${p.cover ? '<div class="p-hero-media"><img src="' + esc(p.cover) + '" alt="' + esc(p.name) + '" loading="eager"></div>' : ''}
  <div class="wrap p-hero-inner">
    <div class="tag mono"><span class="sq" style="background:${catColor}"></span>${esc(catLabel)}</div>
    <h1 class="display">${esc(p.name)}</h1>
    <div class="p-meta mono">ROLE — ${esc((p.role || '—').toUpperCase())} &middot; ${esc(p.year)}</div>
    ${p.blurb ? '<p class="p-blurb">' + esc(p.blurb) + '</p>' : ''}
  </div>
</section>

<main id="projectBody">${bodyHTML}</main>

<section class="wrap also-like">
  <h2 class="mono">You may also like</h2>
  <div class="also-grid">${alsoHTML}</div>
</section>

<a class="wa-fab" href="https://wa.me/5521975021697" target="_blank" rel="noopener" aria-label="Talk on WhatsApp" title="Talk on WhatsApp">
  <svg viewBox="0 0 32 32" fill="#101114"><path d="M16 3C9.4 3 4 8.4 4 15c0 2.3.6 4.5 1.8 6.4L4 29l7.8-1.7c1.9 1 4 1.6 6.2 1.6 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.8c-2 0-3.9-.5-5.6-1.5l-.4-.2-4.6 1 1-4.5-.3-.4C4.9 17.5 4.2 15.8 4.2 15 4.2 9.5 8.7 5 16 5s11.8 4.5 11.8 10-5.5 9.8-11.8 9.8zm6.4-7.4c-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.3-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.7.2-.2.3-.4.5-.6.2-.2.2-.3.3-.6.1-.2 0-.5 0-.7-.1-.2-.8-1.9-1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.4 1.4 3.6c.2.2 2.4 3.7 5.9 5 .8.3 1.5.5 2 .7.8.2 1.6.2 2.1.1.6-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.2-.3-.3-.6-.4z"/></svg>
</a>

<footer>
  <div class="wrap foot-inner mono">
    <span>&copy; KAIQUE TEIXEIRA — SCOPE STUDIOS</span>
    <a href="/index.html#contact">GET IN TOUCH &rarr;</a>
  </div>
</footer>

</body>
</html>
`;
}

const outDir = path.join(ROOT, 'projects');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

let count = 0;
PROJECTS.forEach(function (p) {
  const dir = path.join(outDir, p.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), render(p, PROJECTS));
  count++;
});

console.log('Generated ' + count + ' static project pages in /projects/{slug}/index.html');
