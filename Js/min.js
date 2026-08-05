let mobileMenu = document.getElementById("menu-btn");
let shoMenu = document.getElementById("show-menu");
function menuBtn() {
  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    shoMenu.classList.toggle("active");
  });
}
menuBtn();

// function closeX() {
//   document.body.addEventListener("click", () => {
//     console.log("CloseX")
//   });
// }

// let newOne = ["1", " 2", "3 ", "4", "5", "6 ", "7", "8", "9 ", "10"];
// let newTwo = ["Ahmed", "Rahma", "Mohamed"];
// let newThree = [];
// console.log(newThree.concat(newTwo.join(" ").substring(0, 11).split(" ")));

// let newFour = [1, 2, 4, 68, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(newFour.map(Number).toFixed(2));
