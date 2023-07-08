export function menu() {
  let header = document.getElementById("header1");
  let menu = document.querySelector("#menu-icon");
  let navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
  });

  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };
  window.onscroll = () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  };
}
