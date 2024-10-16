document.addEventListener('DOMContentLoaded', function () {
    var toggles = document.querySelectorAll('.accordion-toggle');

    toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            var content = this.nextElementSibling;

            if (this.getAttribute('aria-expanded') === 'true') {
                this.setAttribute('aria-expanded', 'false');
                content.style.display = 'none';
            } else {
                this.setAttribute('aria-expanded', 'true');
                content.style.display = 'block';
            }
        });
    });
});
