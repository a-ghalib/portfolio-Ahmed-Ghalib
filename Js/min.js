let mobileMenu = document.getElementById("menu-btn");
let shoMenu = document.getElementById("show-menu");
function menuBtn() {
  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    shoMenu.classList.toggle("active");
  });
}
menuBtn();
