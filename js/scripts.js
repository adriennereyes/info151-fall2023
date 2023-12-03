AOS.init();

Fancybox.bind()

const container = document.getElementById("myCarousel");
const options = { infinite: true };

new Carousel(container, options);

var typed = new Typed('#typing-effect', {
    strings: [
        'Kobe Bryant, a legendary figure in the world of basketball, left an indelible mark on the sport and its fans.',
        'His relentless work ethic, unwavering dedication, and extraordinary talent propelled him to the pinnacle of success.',
        'Kobe\'s legacy extends beyond the court; he was a mentor, a philanthropist, and an inspiration to millions.',
        'His tragic and untimely passing was a profound loss that resonated around the world, reminding us of the fragility of life and the enduring impact of a legacy built on passion, determination, and the pursuit of greatness.',
        'Mamba out.'
        ],
    typeSpeed: 50,
    backSpeed: 10,
    startDelay: 500,
    loop: true,
    loopCount: Infinity,
    contentType: 'text'
});

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
    navOpen = false;
    signUpInBtns.classList.remove("showBtns");
    signUpInBtnsShow = false;
    burgerCloseIcon.classList.add("hide-burger-close");
    burgerIcon.classList.remove("hide-burger");
}

function closeSignInModal() {
    signInModal.classList.remove("show-sign-in-modal");
}

signInBtn.addEventListener("click", showSignInModal);
closeBtnSignIn.addEventListener("click", closeSignInModal);

// Sign Up Modal
var signUpBtn = document.getElementById("sign-up-btn");
var signUpModal = document.getElementById("sign-up-modal");
var cancelBtnSignUp = document.getElementById("cancel-btn");
var closeBtnSignUp = document.getElementById("close-btn-sign-up");

function showSignUpModal() {
    signUpModal.classList.add("show-sign-up-modal");
    mainNav.classList.remove("showMainNav");
    navOpen = false;
    signUpInBtns.classList.remove("showBtns");
    signUpInBtnsShow = false;
    burgerCloseIcon.classList.add("hide-burger-close");
    burgerIcon.classList.remove("hide-burger");
}

function closeSignUpModal() {
    signUpModal.classList.remove("show-sign-up-modal");
}

signUpBtn.addEventListener("click", showSignUpModal);
cancelBtnSignUp.addEventListener("click", closeSignUpModal);
closeBtnSignUp.addEventListener("click", closeSignUpModal);