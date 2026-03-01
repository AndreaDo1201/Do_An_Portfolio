import { ajax }                 from './module/ajax-form.js';
import { hamburger }            from './module/hamburger.js';
import { loadProjects }         from './module/load-projects.js';
import { initScrollAnimations } from './module/scroll-animations.js';

ajax();
hamburger();

document.addEventListener('DOMContentLoaded', () => {

  const projectGrid = document.querySelector('#projects-sec');

  if (projectGrid) {
    loadProjects(projectGrid).finally(() => {
      initScrollAnimations();
    });
  } else {
    initScrollAnimations();
  }

});