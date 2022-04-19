const nav = document.querySelector(".nav");
const navbar = document.querySelector(".navbar");
const burgerLink = document.querySelector(".burger__link");
const navLink = nav.querySelectorAll(".nav__link");

burgerLink.addEventListener("click", function() {
    nav.classList.toggle('nav-show');
    navbar.after(nav); 
});

for (let i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", function () {
    let current = document.querySelectorAll(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";

    if(window.innerWidth <= 840){
    nav.classList.toggle('nav-show');
    }
  });
}