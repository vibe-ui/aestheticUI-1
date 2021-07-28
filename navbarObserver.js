  
const navbar = document.querySelector("nav");
const header = document.querySelector("header");

const headerOptions = {
  rootMargin: "-10% 0% 0% 0%"
};

const headerObserver = new IntersectionObserver(function(
  entries,
  headerObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  });
},
headerOptions);

headerObserver.observe(header);