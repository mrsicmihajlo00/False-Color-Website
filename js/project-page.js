// project-page.js — renders the individual project page

async function fetchYouTubeTitle(videoId) {
  // videoId may include ?si= params — strip them for oEmbed
  const cleanId = videoId.split('?')[0];
  try {
    const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${cleanId}&format=json`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.title || null;
  } catch { return null; }
}

async function fetchVimeoTitle(videoId) {
  try {
    const res = await fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${videoId}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.title || null;
  } catch { return null; }
}

document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    document.getElementById('projectInfo').innerHTML =
      '<p style="color:#999">Project not found. <a href="../index.html" style="color:#e5b44f">← Back</a></p>';
    return;
  }

  // Any project with an externalUrl (YouTube, Facebook, Instagram) → redirect immediately
  if (project.externalUrl) {
    window.location.replace(project.externalUrl);
    return;
  }

  // Resolve title
  let title = project.titleOverride;
  if (!title) {
    if (project.platform === 'youtube') title = await fetchYouTubeTitle(project.embed);
    else if (project.platform === 'vimeo') title = await fetchVimeoTitle(project.embed);
  }
  if (!title) title = 'Untitled Project';

  document.title = title + ' — False Color';

  // Build embed src — use the full embed string including ?si= if present
let embedSrc = '';
switch (project.platform) {
  case 'youtube': {
    const cleanId = project.embed.split('?')[0];
    embedSrc = `../youtube.html?v=${cleanId}&autoplay=1`;
    break;
  }
  case 'vimeo':
    embedSrc = `https://player.vimeo.com/video/${project.embed}?autoplay=1&title=0&byline=0&portrait=0`;
    break;
  default:
    embedSrc = project.embed;
}

  document.getElementById('projectVideo').innerHTML =
    `<iframe src="${embedSrc}" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

  document.getElementById('projectInfo').innerHTML = `
    <span class="card-type">${project.type}</span>
    <h1>${title}</h1>
    <p>${project.description}</p>
  `;

  // You may also like
  const alsoSection = document.getElementById('alsoLike');
  const alsoGrid = document.getElementById('alsoGrid');

  if (project.related && project.related.length > 0) {
    const relatedProjects = project.related.map(rid => PROJECTS.find(p => p.id === rid)).filter(Boolean);

    const relatedTitles = await Promise.all(relatedProjects.map(async rp => {
      if (rp.titleOverride) return rp.titleOverride;
      if (rp.platform === 'youtube') return await fetchYouTubeTitle(rp.embed) || 'Untitled';
      if (rp.platform === 'vimeo') return await fetchVimeoTitle(rp.embed) || 'Untitled';
      return 'Untitled';
    }));

    alsoGrid.innerHTML = relatedProjects.map((rp, i) => {
      const isExternal = !!rp.externalUrl;
      const href = isExternal ? rp.externalUrl : `project.html?id=${rp.id}`;
      const target = isExternal ? 'target="_blank" rel="noopener noreferrer"' : '';
      const imgStyle = isExternal ? 'style="object-fit:contain;background:#000"' : '';
      const btnIcon = isExternal ? '&#8599;' : '&#9654;';
      // Fix relative thumb paths — project page is in /pages/, root assets need ../
      const thumbSrc = (rp.thumb && !rp.thumb.startsWith('http')) ? '../' + rp.thumb : (rp.thumb || '');
      return `
        <a href="${href}" ${target} class="card">
          <div class="card-thumb">
            <img src="${thumbSrc}" alt="${relatedTitles[i]}" loading="lazy" ${imgStyle}>
            <div class="card-overlay">
              <span class="play-btn">${btnIcon}</span>
              <div class="card-hover-title">
                <span class="card-hover-type">${rp.type}</span>
                <span class="card-hover-name">${relatedTitles[i]}</span>
              </div>
            </div>
          </div>
        </a>`;
    }).join('');
  } else {
    alsoSection.style.display = 'none';
  }
});
