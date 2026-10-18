'use client';

import { useEffect } from 'react';

/*
 * Motion for the layout concepts (/koncepty/a, /koncepty/b), attached by class name:
 * - .reveal elements slide in once they enter the screen
 * - .pan screenshots scroll top to bottom while their .k-pan-host is visible
 * - video[data-autoplay] plays only while on screen
 * - #knav gets a shadow once the page scrolls
 * - .k-toc links light up for the [data-chapter] section in view (concept B)
 * Everything stays static when the visitor prefers reduced motion.
 */
export default function ConceptEffects() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups: Array<() => void> = [];
    const pans = Array.from(document.querySelectorAll<HTMLImageElement>('.pan'));
    const nav = document.getElementById('knav');

    function measure() {
      pans.forEach((img) => {
        const box = img.parentElement!.clientHeight;
        const d = Math.max(0, img.offsetHeight - box);
        img.style.setProperty('--dist', `${(-d).toFixed(0)}px`);
        img.style.setProperty('--dur', `${Math.max(8, d / 60).toFixed(1)}s`);
      });
    }
    const onScroll = () => nav?.classList.toggle('scrolled', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
    });
    pans.forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', measure);
        cleanups.push(() => img.removeEventListener('load', measure));
      }
    });
    measure();
    onScroll();

    const videos = Array.from(document.querySelectorAll<HTMLVideoElement>('video[data-autoplay]'));
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.k-pan-host').forEach((el) => el.classList.add('k-on'));
      if (!reduce) videos.forEach((v) => v.play().catch(() => {}));
      return () => cleanups.forEach((fn) => fn());
    }

    if (!reduce) {
      const vio = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            const v = e.target as HTMLVideoElement;
            if (e.isIntersecting) v.play().catch(() => {});
            else v.pause();
          }),
        { threshold: 0.2 },
      );
      videos.forEach((v) => vio.observe(v));
      cleanups.push(() => vio.disconnect());

      const io = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.remove('pending');
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.12 },
      );
      document.querySelectorAll('.reveal').forEach((el) => {
        if (el.getBoundingClientRect().top > window.innerHeight) el.classList.add('pending');
        io.observe(el);
      });
      cleanups.push(() => io.disconnect());
    }

    const on = new IntersectionObserver(
      (es) => es.forEach((e) => e.target.classList.toggle('k-on', e.isIntersecting)),
      { threshold: 0.3 },
    );
    document.querySelectorAll('.k-pan-host').forEach((el) => on.observe(el));
    cleanups.push(() => on.disconnect());

    // Chapter index (concept B): highlight the section crossing the upper third.
    const chapters = Array.from(document.querySelectorAll<HTMLElement>('[data-chapter]'));
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('.k-toc a'));
    if (chapters.length && links.length) {
      const co = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (!e.isIntersecting) return;
            const id = e.target.id;
            links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
          }),
        { rootMargin: '-30% 0px -60% 0px' },
      );
      chapters.forEach((c) => co.observe(c));
      cleanups.push(() => co.disconnect());
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
