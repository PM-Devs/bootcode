document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.neo-menu');
  var nav = document.querySelector('.neo-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.querySelector('b').textContent = isOpen ? '−' : '+';
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelector('b').textContent = '+';
      });
    });
  }

  var form = document.querySelector('.neo-contact form');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var button = form.querySelector('button');
      button.innerHTML = 'Message received <b>✓</b>';
      button.disabled = true;
    });
  }
});
