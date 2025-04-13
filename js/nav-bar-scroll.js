const header = document.querySelector('#nav-bar');
const divider = document.querySelector('#divider');

const observer = new IntersectionObserver(
  ([entry]) => {
    if (!entry.isIntersecting) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  },
  {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0,
  }
);

observer.observe(divider);
