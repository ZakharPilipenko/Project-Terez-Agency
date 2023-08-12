const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      const childElements = entry.target.querySelectorAll('*');
      childElements.forEach(child => {
        child.classList.add('active');
      });
    } else {
      entry.target.classList.remove('active');
      const childElements = entry.target.querySelectorAll('*');
      childElements.forEach(child => {
        child.classList.remove('active');
      });
    }
  });
});

revealElements.forEach(element => {
  observer.observe(element);
});
