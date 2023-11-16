var mainNav = document.getElementById("mainNav");
var burgerBtn = document.getElementById("burgerBtn")
var navOpen = false;

function showNav() {
    if (!navOpen) {
        mainNav.classList.add("showMainNav");
        navOpen = true;
    } else {
        mainNav.classList.remove("showMainNav");
        navOpen = false;
    }
}

burgerBtn.addEventListener("click", showNav);