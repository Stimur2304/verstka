// let burger = document.getElementById("right-header-burger")
// let open = document.getElementsById("burger_y")
// let x = document.getElementById("burger_X")
// function burger_open(){
//     burger.style.display="block"
//     open.style.display="none"
//     x.style.display="block"
// }
// function burger_x(){
//     burger.style.display="none"
//     open.style.display="block"
//     x.style.display="none"
// }

const menuIcon = document.querySelector('.menu-icon');

function toggleMenuIcon() {
  menuIcon.classList.toggle('active')
}

menuIcon.addEventListener('click', toggleMenuIcon);