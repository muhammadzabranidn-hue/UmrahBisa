// Pencarian agen (filter di sisi browser)
(function () {
    var input = document.getElementById('agentSearch');
    var items = document.querySelectorAll('.agent-item');
    var count = document.getElementById('agentCount');
    var empty = document.getElementById('agentEmpty');

    input.addEventListener('input', function () {
        var q = input.value.trim().toLowerCase();
        var shown = 0;
        items.forEach(function (el) {
            var match = el.dataset.search.indexOf(q) !== -1;
            el.classList.toggle('d-none', !match);
            if (match) shown++;
        });
        count.textContent = 'Menampilkan ' + shown + ' agen';
        empty.classList.toggle('d-none', shown !== 0);
    });
})();