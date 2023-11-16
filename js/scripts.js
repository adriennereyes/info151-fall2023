var mainNav = document.getElementById("mainNav");
var burgerBtn = document.getElementById("burgerBtn")
var signUpInBtns = document.getElementById("sign-in-up-btns-container")
var navOpen = false;
var signUpInBtnsShow = false;

function showNav() {
    if (!navOpen) {
        mainNav.classList.add("showMainNav");
        navOpen = true;
        signUpInBtns.classList.add("showBtns");
        signUpInBtnsShow = true;
    } else {
        mainNav.classList.remove("showMainNav");
        navOpen = false;
        signUpInBtns.classList.remove("showBtns");
        signUpInBtnsShow = false;
    }
}

burgerBtn.addEventListener("click", showNav);