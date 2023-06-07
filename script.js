// this function allows the peeps to appear and show depending on the scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show')
      } else {
          entry.target.classList.remove('show')
      }
    });
  });
  
  const hiddenPeeps = document.querySelectorAll('.hidden');
  hiddenPeeps.forEach((el) => observer.observe(el));