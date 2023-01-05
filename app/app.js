// var navLinks = document.getElementById("navLinks");
// function showMenu(){
//     navLinks.style.right = "0";
//     }
// function hideMenu(){
//     navLinks.style.right = "-200px";
// }

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
}
