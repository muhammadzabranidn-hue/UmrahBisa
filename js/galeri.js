// Galeri: filter kategori + lightbox (Bootstrap modal)
(function () {
    var buttons = document.querySelectorAll('.filter-btn');
    var items = document.querySelectorAll('.galeri-item');
    var modalEl = document.getElementById('lightbox');
    var img = document.getElementById('lightboxImg');
    var caption = document.getElementById('lightboxCaption');
    var modal = new bootstrap.Modal(modalEl);
    var current = 0;

    // --- Filter ---
    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var f = btn.dataset.filter;
            buttons.forEach(function (b) { b.classList.toggle('active', b === btn); });
            items.forEach(function (el) {
                el.classList.toggle('d-none', f !== 'all' && el.dataset.category !== f);
            });
        });
    });

    // --- Lightbox ---
    function visibleLinks() {
        return Array.prototype.filter.call(items, function (el) {
            return !el.classList.contains('d-none');
        }).map(function (el) { return el.querySelector('.galeri-link'); });
    }

    function show(index) {
        var links = visibleLinks();
        if (!links.length) return;
        current = (index + links.length) % links.length;
        img.src = links[current].dataset.full;
        img.alt = links[current].dataset.caption;
        caption.textContent = links[current].dataset.caption;
    }

    document.getElementById('galeriGrid').addEventListener('click', function (e) {
        var link = e.target.closest('.galeri-link');
        if (!link) return;
        show(visibleLinks().indexOf(link));
        modal.show();
    });

    document.getElementById('lightboxPrev').addEventListener('click', function () { show(current - 1); });
    document.getElementById('lightboxNext').addEventListener('click', function () { show(current + 1); });

    document.addEventListener('keydown', function (e) {
        if (!modalEl.classList.contains('show')) return;
        if (e.key === 'ArrowLeft') show(current - 1);
        if (e.key === 'ArrowRight') show(current + 1);
    });
})();