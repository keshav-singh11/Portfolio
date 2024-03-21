function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var typed = new Typed(".section__text__p2",{
  strings: ["Java Programmer", "Frontend Developer"],
  typeSpeed:100,
  backSpeed:60,
  backDelay: 1000,
  loop:true,
})
