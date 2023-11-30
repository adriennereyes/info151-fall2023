// Nav
var mainNav = document.getElementById("mainNav");
var burgerBtn = document.getElementById("burgerBtn")
var signUpInBtns = document.getElementById("sign-in-up-btns-container")
var navOpen = false;
var signUpInBtnsShow = false;

var burgerIcon = document.querySelector("#burger");
var burgerCloseIcon = document.querySelector("#burger-close");

function showNav() {
    if (!navOpen) {
        mainNav.classList.add("showMainNav");
        navOpen = true;
        signUpInBtns.classList.add("showBtns");
        signUpInBtnsShow = true;
        burgerCloseIcon.classList.remove("hide-burger-close");
        burgerIcon.classList.add("hide-burger");
    } else {
        mainNav.classList.remove("showMainNav");
        navOpen = false;
        signUpInBtns.classList.remove("showBtns");
        signUpInBtnsShow = false;
        burgerCloseIcon.classList.add("hide-burger-close");
        burgerIcon.classList.remove("hide-burger");
    }
}

burgerBtn.addEventListener("click", showNav);

// Sign In Modal
var signInBtn = document.getElementById("sign-in-btn");
var signInModal = document.getElementById("sign-in-modal");
var closeBtnSignIn = document.getElementById("close-btn-sign-in");

function showSignInModal() {
    signInModal.classList.add("show-sign-in-modal");
    mainNav.classList.remove("showMainNav");
    signUpInBtns.classList.remove("showBtns");
}

function closeSignInModal() {
    signInModal.classList.remove("show-sign-in-modal");
}

signInBtn.addEventListener("click", showSignInModal);
closeBtnSignIn.addEventListener("click", closeSignInModal);