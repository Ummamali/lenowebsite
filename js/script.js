document.addEventListener("DOMContentLoaded", (e) => {
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");

  const navLinks = document.querySelectorAll("#navbar .main-nav ul a");

  // When the window is scrolled, it changes color
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 5) {
      navbar.classList.add("scrolling");
    } else {
      navbar.classList.remove("scrolling");
    }
  });

  // Hamburger menu
  hamburger.addEventListener("click", (e) => {
    navbar.classList.toggle("nav-active");
    document.body.classList.toggle("no-scroll-y");
  });

  navLinks.forEach((lnk) => {
    if (lnk.getAttribute("href").startsWith("#")) {
      console.log("Event listener added to", lnk.innerHTML);
      lnk.addEventListener("click", (e) => {
        navbar.classList.remove("nav-active");
        document.body.classList.remove("no-scroll-y");
      });
    }
  });
});
