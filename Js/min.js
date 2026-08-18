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
let skills = document.querySelector(".cards");
let skillCard = [
  { image: "./imgs/HTML.png", title: "HTML", info: "" },
  { image: "/imgs/CSS.png", title: "CSS", info: "" },
  { image: "/imgs/JS.jpg", title: "JavaScript", info: "" },
  { image: "/imgs/REACT.png", title: "React.js", info: "" },
  { image: "/imgs/Next.js.jpg", title: "Next.js", info: "" },
  { image: "/imgs/Tailwind.png", title: "Tailwind", info: "" },
  { image: "/imgs/Git.png", title: "Git", info: "" },
  { image: "/imgs/TypeScript.png", title: "TypeScript", info: "" },
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
skillCard.map((skill) => {
  const card = document.createElement("div");
  card.innerHTML = `
          <div class="card hov">
            <img src="${skill.image}" alt="${skill.title}"/>
            <h3>${skill.title}</h3>
            <span></span>
          </div> `;
  skills.appendChild(card);
});
