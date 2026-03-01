const PROJECTS_API = 'includes/get_projects.php';

const escapeHTML = (str) => {
  return String(str)
    .replace(/&/g,  '&amp;')
    .replace(/</g,  '&lt;')
    .replace(/>/g,  '&gt;')
    .replace(/"/g,  '&quot;')
    .replace(/'/g,  '&#39;');
};

const buildProjectCard = (project) => {
  const article = document.createElement('article');
  article.className       = `project project-${project.id}`;
  article.dataset.projectId = project.id;

  const projectImage = project.image
    ? `<img src="${escapeHTML(project.image)}"
            alt="${escapeHTML(project.alt || project.title)}"
            style="width:100%;height:235px;object-fit:cover;display:block;"
            loading="lazy" />`
    : `<div style="width:100%;height:235px;background:#bfa38b;"></div>`;

  article.innerHTML = `
    <a href="project.php?id=${project.id}" class="project-link" data-project-id="${project.id}">
      <div class="project-img">
        ${projectImage}
      </div>
    </a>
    <div class="project-info">
      <span class="project-category">${escapeHTML(project.category)}</span>
      <h3 class="project-title">${escapeHTML(project.title)}</h3>
      <span class="project-role">${escapeHTML(project.role)}: An Do</span>
    </div>
  `;

  return article;
};

const showSkeletons = (container, count = 7) => {
  container.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const skeletonCard = document.createElement('article');
    skeletonCard.className = 'project project-skeleton';
    skeletonCard.innerHTML = `
      <div style="width:100%;height:235px;background:#e0cfc6;border-radius:12px 12px 0 0;"></div>
      <div class="project-info">
        <div style="height:12px;width:40%;background:#e0cfc6;border-radius:4px;margin-bottom:8px;"></div>
        <div style="height:20px;width:85%;background:#d0bfb6;border-radius:4px;margin-bottom:8px;"></div>
        <div style="height:12px;width:60%;background:#e0cfc6;border-radius:4px;"></div>
      </div>
    `;
    container.appendChild(skeletonCard);
  }
};

const showError = (container, errorMessage) => {
  container.innerHTML = `
    <p style="padding:2rem;color:#896c5e;font-family:librebodoni;font-size:18px;">
      Could not load projects: ${escapeHTML(errorMessage)}
    </p>`;
};

export const loadProjects = async (container, { categoryId, limit } = {}) => {
  const apiUrl = new URL(PROJECTS_API, window.location.href);
  if (categoryId) apiUrl.searchParams.set('category_id', categoryId);
  if (limit)      apiUrl.searchParams.set('limit', limit);

  showSkeletons(container);

  try {
    const response = await fetch(apiUrl.toString());
    if (!response.ok) throw new Error(`Server error ${response.status}`);

    const responseData = await response.json();
    if (!responseData.success) throw new Error(responseData.error || 'Unknown API error');

    container.innerHTML = '';

    if (!responseData.projects?.length) {
      container.innerHTML = '<p style="padding:2rem;font-family:librebodoni;">No projects found.</p>';
      return;
    }

    responseData.projects.forEach((project) => container.appendChild(buildProjectCard(project)));

  } catch (err) {
    console.error('[load-projects]', err);
    showError(container, err.message);
  }
};