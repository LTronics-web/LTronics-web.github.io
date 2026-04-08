/* Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

/* Fade Animation */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

/* Dynamic year in footer */
document.querySelectorAll("#year").forEach(el => {
  el.textContent = new Date().getFullYear();
});


/* Image slider */
const slider = document.querySelector('.image-slider');
const afterImage = document.querySelector('.img-after');
const handle = document.querySelector('.slider-handle');

let isDragging = false;

handle.addEventListener('mousedown', () => {
  isDragging = true;
});

window.addEventListener('mouseup', () => {
  isDragging = false;
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

  const rect = slider.getBoundingClientRect();
  let x = e.clientX - rect.left;

  // Begrenzen
  x = Math.max(0, Math.min(x, rect.width));

  const percent = (x / rect.width) * 100;

  afterImage.style.width = percent + "%";
  handle.style.left = percent + "%";
});

/* Image slider mobile support*/

handle.addEventListener('touchstart', () => {
  isDragging = true;
});

window.addEventListener('touchend', () => {
  isDragging = false;
});

window.addEventListener('touchmove', (e) => {
  if (!isDragging) return;

  const rect = slider.getBoundingClientRect();
  let x = e.touches[0].clientX - rect.left;

  x = Math.max(0, Math.min(x, rect.width));

  const percent = (x / rect.width) * 100;

  afterImage.style.width = percent + "%";
  handle.style.left = percent + "%";
});