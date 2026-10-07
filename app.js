/* ============================================================
   Renders GROUPS (from data/characters.js) into .collection
   and handles card flipping. No need to edit this file to add
   characters.
   ============================================================ */
(function () {
    'use strict';

    const ACCENTS = ['gold', 'forest', 'plum', 'wine', 'walnut'];

    const LINK_STYLES = {
        janitor:  { cssClass: 'btn-janitor',  icon: 'pics/icon-janitor.png',  download: false },
        download: { cssClass: 'btn-download', icon: 'pics/icon-download.png', download: true }
    };

    const collection = document.querySelector('.collection');
    if (!collection) return;

    if (typeof GROUPS === 'undefined' || !Array.isArray(GROUPS)) {
        collection.appendChild(
            makeNotice('Character data failed to load. Check that data/characters.js is present and has no syntax errors.')
        );
        return;
    }

    // ---------- build ----------

    function el(tag, cssClass, text) {
        const node = document.createElement(tag);
        if (cssClass) node.className = cssClass;
        if (text != null) node.textContent = text;
        return node;
    }

    function makeNotice(message) {
        return el('p', 'load-error', message);
    }

    function paragraphsOf(text) {
        if (Array.isArray(text)) return text;
        if (typeof text === 'string' && text.trim()) return [text];
        return [];
    }

    function buildLink(link) {
        const preset = LINK_STYLES[link.style] || {};
        const anchor = el('a', 'btn ' + (link.cssClass || preset.cssClass || ''));
        anchor.href = link.url || '#';

        const isDownload = link.download != null ? link.download : preset.download;
        if (isDownload) {
            anchor.setAttribute('download', '');
        } else {
            anchor.target = '_blank';
            anchor.rel = 'noopener';
        }

        const iconSrc = link.icon || preset.icon;
        if (iconSrc) {
            const icon = el('img', 'btn-icon');
            icon.src = iconSrc;
            icon.alt = '';
            anchor.appendChild(icon);
        }

        anchor.appendChild(el('span', null, link.label || ''));
        return anchor;
    }

    function buildCard(data) {
        const card = el('div', 'card');
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-pressed', 'false');
        card.setAttribute('aria-label', (data.name || 'Character') + ' — flip for details');

        const inner = el('div', 'card-inner');

        // front
        const front = el('div', 'card-front');
        const imageWrap = el('div', 'card-image');
        if (data.image) {
            const img = el('img');
            img.src = data.image;
            img.alt = data.alt || data.name || '';
            img.loading = 'lazy';
            imageWrap.appendChild(img);
        }
        front.appendChild(imageWrap);

        const footer = el('div', 'card-footer');
        footer.appendChild(el('h3', 'card-name', data.name || ''));
        front.appendChild(footer);

        // back
        const back = el('div', 'card-back');
        const backContent = el('div', 'card-back-content');

        const description = el('div', 'card-description');
        paragraphsOf(data.text).forEach(paragraph => {
            description.appendChild(el('p', null, paragraph));
        });
        backContent.appendChild(description);

        const links = Array.isArray(data.links) ? data.links : [];
        if (links.length) {
            const linkWrap = el('div', 'card-links');
            links.forEach(link => linkWrap.appendChild(buildLink(link)));
            backContent.appendChild(linkWrap);
        }

        back.appendChild(backContent);
        inner.appendChild(front);
        inner.appendChild(back);
        card.appendChild(inner);
        return card;
    }

 function buildGroup(group) {
    const section = el('section', 'card-group');
    if (ACCENTS.indexOf(group.accent) !== -1) {
        section.classList.add('accent-' + group.accent);
    }

    const title = el('h2', 'group-title');
    title.appendChild(el('span', null, group.title || ''));
    section.appendChild(title);

    if (group.desc) section.appendChild(el('p', 'group-desc', group.desc));

// NEW: lorebook notice
if (group.lorebook) {
    const notice = el('div', 'lorebook-notice');
    const icon = el('span', 'lorebook-icon', '📖');
    
    const content = el('div', 'lorebook-content');
    const text = el('span', 'lorebook-text', group.lorebook.text || group.lorebook);
    content.appendChild(text);
    
    notice.appendChild(icon);
    notice.appendChild(content);
    
    // Add download button if lorebook file path is provided
    if (group.lorebook.file) {
        const button = el('a', 'lorebook-btn');
        button.href = group.lorebook.file;
        button.download = '';
        button.textContent = 'Download Lorebook';
        content.appendChild(button);
    }
    
    section.appendChild(notice);
}


    const grid = el('div', 'cards-container');
    (group.cards || []).forEach(cardData => grid.appendChild(buildCard(cardData)));
    section.appendChild(grid);

    return section;
}


    const fragment = document.createDocumentFragment();
    GROUPS.forEach(group => fragment.appendChild(buildGroup(group)));
    collection.appendChild(fragment);

    // ---------- flipping (delegated, so it covers every card) ----------

    function flip(card) {
        const flipped = card.classList.toggle('flipped');
        card.setAttribute('aria-pressed', flipped ? 'true' : 'false');
    }

collection.addEventListener('click', function (e) {
    const card = e.target.closest('.card');
    if (!card) return;
    if (e.target.closest('a')) return; // let links do their thing
    flip(card);
});


    collection.addEventListener('keydown', function (e) {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const card = e.target.closest('.card');
        if (!card || e.target !== card) return;
        e.preventDefault();
        flip(card);
    });
})();
