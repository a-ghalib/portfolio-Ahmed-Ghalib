let mobileMenu = document.getElementById("menu-btn");
let shoMenu = document.getElementById("show-menu");
let cards = document.querySelector(".cards-project");
const products = [
  {
    title: "Dashboard",
    image: "./imgs/Dashboard.jpg",
    ditails: "Admin Dashboard",
    info: "A modern admin dashboard bulit with React.js Tailwind CSS and Recharts",
    linkOne: "Live Demo",
    linkTwo: "Github",
  },
  {
    image: "./imgs/img-desg.jpg",
    title: "E-Commerce",
    ditails: "E-Commerce Store",
    info: "Full featured online store with cart, checkout and order management.",
    linkOne: "Live Demo",
    linkTwo: "Github",
  },
  {
    image: "./imgs/PortfolioAhmedGhalib.png",
    title: "Portfolio",
    ditails: "Developer Portfolio",
    info: "A personal portfolio website built with Next.js and Tailwind CSS.",
    linkOne: "Live Demo",
    linkTwo: "Github",
  },
];

function menuBtn() {
  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    shoMenu.classList.toggle("active");
  });
}
menuBtn();

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
          <div class="card hov">
            <img src="${product.image}" alt="projet" />
            <div class="card-text">
              <span>${product.title}</span>
              <h3>${product.ditails}</h3>
              <p>
                ${product.info}
              </p>
            </div>
            <div class="links">
              <a href="#">${product.linkOne} <i class="fa-solid fa-arrow-turn-up"></i></a>
              <a href="#">${product.linkTwo} <i class="fa-brands fa-github"></i></a>
            </div>
          </div>`;
  cards.appendChild(card);
});
