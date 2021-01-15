window.addEventListener("DOMContentLoaded", (event) => {
  const menuOpen = document.querySelector(".menu-open");
  const menuClose = document.querySelector(".menu-close");
  const nav = document.querySelector(".links");

  menuOpen.addEventListener("click", () => {
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
    nav.style.display = "flex";
  });

  menuClose.addEventListener("click", () => {
    menuClose.style.display = "none";
    menuOpen.style.display = "block";
    nav.style.display = "none";
  });
});
