'use strict';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initAnimations();
    initHNFeed();
});

function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    const saved = localStorage.getItem('theme') || 'dark';

    applyTheme(saved);

    toggle?.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem('theme', next);
    });

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger?.addEventListener('click', () => {
        const isActive = hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', String(isActive));
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    window.addEventListener('scroll', debounce(() => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }, 10));
}

function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ================================
   In the wild — Hacker News feed
   ================================ */
function initHNFeed() {
    const container = document.getElementById('hnFeed');
    if (!container) return;

    container.innerHTML = skeletons(6);

    const query = 'AI agents devops';
    const url = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(query)}&tags=story&hitsPerPage=12`;

    fetch(url)
        .then(r => { if (!r.ok) throw new Error(); return r.json(); })
        .then(data => {
            const stories = data.hits.filter(h => h.title).slice(0, 6);
            if (stories.length === 0) throw new Error();
            container.innerHTML = stories.map(hnCard).join('');
        })
        .catch(() => {
            const section = container.closest('.inthewild');
            if (section) section.style.display = 'none';
        });
}

function hnCard(story) {
    const hnUrl = `https://news.ycombinator.com/item?id=${story.objectID}`;
    const href = story.url || hnUrl;
    let domain = 'news.ycombinator.com';
    try { domain = new URL(story.url).hostname.replace(/^www\./, ''); } catch (_) {}
    const age = timeAgo(story.created_at);

    return `
        <a class="hn-card" href="${escHtml(href)}" target="_blank" rel="noopener noreferrer">
            <div class="hn-card-top">
                <span class="hn-domain">${escHtml(domain)}</span>
                <span class="hn-age">${age}</span>
            </div>
            <h3 class="hn-title">${escHtml(story.title)}</h3>
            <div class="hn-footer">
                <span class="hn-stat"><i class="fas fa-arrow-up"></i>${story.points ?? 0}</span>
                <span class="hn-stat"><i class="fas fa-comment"></i>${story.num_comments ?? 0}</span>
                <a class="hn-discuss" href="${escHtml(hnUrl)}" target="_blank" rel="noopener noreferrer"
                   onclick="event.stopPropagation()">HN ↗</a>
            </div>
        </a>`;
}

function skeletons(n) {
    return Array.from({ length: n }, () => `
        <div class="hn-card hn-skeleton">
            <div class="skel-line skel-short"></div>
            <div class="skel-line skel-long"></div>
            <div class="skel-line skel-medium"></div>
            <div class="skel-line skel-thin"></div>
        </div>`).join('');
}

function timeAgo(dateStr) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const h = Math.floor(diff / 3_600_000);
    if (h < 1)  return 'just now';
    if (h < 24) return `${h}h ago`;
    const d = Math.floor(h / 24);
    if (d < 30) return `${d}d ago`;
    return `${Math.floor(d / 30)}mo ago`;
}

function escHtml(str) {
    return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

/* ================================
   Utilities
   ================================ */
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}
