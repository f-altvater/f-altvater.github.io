const menu = document.querySelector(".menu-mobile");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {

    if(menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "inline-flex";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "inline-flex";
        menuIcon.style.display = "none";
    }

}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", toggleMenu);
})