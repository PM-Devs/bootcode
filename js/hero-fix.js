document.addEventListener('DOMContentLoaded', function () {
  var title = document.querySelector('.cui-section h2');
  if (!title || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var text = 'EVERY SYSTEM.\nONE CONVERSATION.';
  var cursor = document.createElement('span');
  cursor.className = 'type-cursor';
  title.classList.add('typing');
  title.textContent = '';
  title.appendChild(cursor);
  var position = 0;
  function type() {
    if (position < text.length) {
      var letter = text[position++];
      title.insertBefore(letter === '\n' ? document.createElement('br') : document.createTextNode(letter), cursor);
      window.setTimeout(type, letter === ' ' ? 45 : 65);
    } else window.setTimeout(function () {
      title.innerHTML = 'EVERY SYSTEM.<br>ONE <mark>CONVERSATION.</mark>';
      title.classList.remove('typing');
    }, 450);
  }
  window.setTimeout(type, 220);
});
