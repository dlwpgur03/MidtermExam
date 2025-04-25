
const revealTexts = document.querySelectorAll('.reveal-text');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}, { threshold: 0.2 });

revealTexts.forEach(text => {
  observer.observe(text);
});
