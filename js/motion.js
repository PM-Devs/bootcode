document.addEventListener('DOMContentLoaded', function () {
  var headline = document.querySelector('.neo-hero h1');
  if (headline && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var finalMarkup = 'TECH THAT<br><em>GETS</em> BUSINESS<br>MOVING.';
    var finalText = 'TECH THAT\nGETS BUSINESS\nMOVING.';
    var reserve = document.createElement('span');
    reserve.className = 'neo-title-reserve';
    reserve.setAttribute('aria-hidden', 'true');
    reserve.innerHTML = finalMarkup;
    var output = document.createElement('span');
    output.className = 'neo-title-output';
    output.setAttribute('aria-hidden', 'true');
    var cursor = document.createElement('span');
    cursor.className = 'type-cursor';
    headline.setAttribute('aria-label', finalText.replace(/\n/g, ' '));
    headline.textContent = '';
    headline.appendChild(reserve);
    headline.appendChild(output);
    output.appendChild(cursor);
    headline.classList.add('typing');
    var index = 0;
    var emphasis;
    function typeNext() {
      if (index < finalText.length) {
        var character = finalText[index++];
        if (character === '\n') output.insertBefore(document.createElement('br'), cursor);
        else if (index - 1 >= 10 && index - 1 < 14) {
          if (!emphasis) {
            emphasis = document.createElement('em');
            output.insertBefore(emphasis, cursor);
          }
          emphasis.appendChild(document.createTextNode(character));
        } else output.insertBefore(document.createTextNode(character), cursor);
        window.setTimeout(typeNext, character === ' ' ? 45 : 70);
      } else {
        window.setTimeout(function () {
          cursor.remove();
          headline.classList.remove('typing');
        }, 500);
      }
    }
    window.setTimeout(typeNext, 260);
  }

  var targets = document.querySelectorAll('.neo-section, .cui-section, .neo-contact-emails');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
    }, { threshold: 0.12 });
    targets.forEach(function (element) { element.classList.add('neo-reveal'); observer.observe(element); });
  }
});
