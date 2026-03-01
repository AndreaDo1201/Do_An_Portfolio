export function initScrollAnimations() {

  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  const fadeUp = (selector, { y = 40, duration = 0.8, stagger = 0, delay = 0, start = 'top 88%' } = {}) => {
    const elements = gsap.utils.toArray(selector);
    if (!elements.length) return;

    gsap.from(elements, {
      opacity: 0,
      y,
      duration,
      delay,
      stagger,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: elements[0],
        start,
        toggleActions: 'play none none none',
      },
    });
  };

  const fadeUpEach = (selector, { y = 40, duration = 0.8, delay = 0 } = {}) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y,
        duration,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    });
  };

  if (document.querySelector('#hero')) {

    gsap.from('.main-header', {
      opacity: 0,
      y: -30,
      duration: 0.9,
      ease: 'power2.out',
    });

    gsap.from('.intro-head h2', {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from('#text-anim', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.35,
      ease: 'power2.out',
    });

    gsap.from('.hero-img', {
      opacity: 0,
      x: 60,
      duration: 1.1,
      delay: 0.5,
      ease: 'power2.out',
    });

    gsap.from('.feature-project', {
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.feature-project',
        start: 'top 95%',
        toggleActions: 'play none none none',
      },
    });

    fadeUp('.profile-text h2',  { y: 50, duration: 0.9 });
    fadeUp('.profile-img',       { y: 30, duration: 0.7, stagger: 0.15 });
    fadeUp('.intro-img',         { y: 40, duration: 0.8, delay: 0.1 });
    fadeUp('.text-intro',        { y: 30, duration: 0.8, delay: 0.2 });
    fadeUp('.resume-btn',        { y: 20, duration: 0.7, delay: 0.3 });

    fadeUp('.project-head .project-title', { y: 50, duration: 0.9 });

    gsap.utils.toArray('.project').forEach((projectCard) => {
      gsap.from(projectCard, {
        opacity: 0,
        y: 50,
        duration: 0.75,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        scrollTrigger: {
          trigger: projectCard,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    });

    fadeUp('#contact h2', { y: 50, duration: 0.9 });
    fadeUp('.form',        { y: 40, duration: 0.8, delay: 0.15 });
    fadeUp('.footer-logo', { y: 30, duration: 0.7 });

    gsap.from('.social-links li', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.social-media',
        start: 'top 95%',
        toggleActions: 'play none none none',
      },
    });

  }

  if (document.querySelector('#project-case')) {

    gsap.from('#project-case h2', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from('.hero-pro', {
      opacity: 0,
      scale: 0.97,
      duration: 1,
      delay: 0.2,
      ease: 'power2.out',
    });

    fadeUp('.project-meta', { y: 20, duration: 0.7, delay: 0.1 });

    fadeUpEach('.case-title', { y: 35, duration: 0.75 });

    fadeUpEach('.case-tex, #project-case p', { y: 25, duration: 0.7 });

    fadeUpEach('.photos img', { y: 40, duration: 0.7 });

    fadeUp('.photo-icons img', { y: 30, duration: 0.6, stagger: 0.12 });

    fadeUp('.back-btn-wrap', { y: 20, duration: 0.6, delay: 0.1 });

    fadeUp('.footer-logo', { y: 30, duration: 0.7 });

    gsap.from('.social-links li', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.social-media',
        start: 'top 95%',
        toggleActions: 'play none none none',
      },
    });

  }

}