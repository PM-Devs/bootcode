document.addEventListener('DOMContentLoaded', function () {
  var lead = document.querySelector('.neo-hero .neo-lead');
  if (lead) lead.textContent = 'We build software, integrate AI, and digitize business operations — with pricing designed around your business activity.';
  var eyebrow = document.querySelector('.neo-hero .neo-eyebrow');
  if (eyebrow) eyebrow.innerHTML = '<i></i> WELCOME TO THE FUTURE';
  var introTitle = document.querySelector('.neo-intro h2');
  if (introTitle) introTitle.innerHTML = 'TECHNOLOGY BUILT<br>AROUND YOUR<br><mark>BUSINESS.</mark>';
  var introCopy = document.querySelector('.neo-intro-head > p');
  if (introCopy) introCopy.textContent = 'Every business operates differently. We build practical technology solutions that solve real operational challenges, improve productivity, and support sustainable growth.';
});
