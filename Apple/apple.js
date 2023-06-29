"use strict";

let req = "";

// mobile-nav
const mobMenuBtn = document.getElementById("mob-menu-btn");
const mobSrh = document.getElementById("mob-nav-srh");
const mobLogo = document.getElementById("mob-nav-logo");
const mobCart = document.getElementById("mob-nav-cart");
const head = document.getElementById("header");

// cross-bar
const dash1 = document.getElementById("dash1");
const dash2 = document.getElementById("dash2");


// controls for top mobile nav
function hideIcons() {
    dash1.classList.toggle("cross1");
    dash2.classList.toggle("cross2");

    mobLogo.classList.toggle("hideIcons");
    mobSrh.classList.toggle("hideIcons");
    mobCart.classList.toggle("hideIcons");

    head.classList.toggle("black");
};

// logo
mobLogo.addEventListener("click", function () {
    window.location.href = "apple.html";
});

// cross-bar-btn
mobMenuBtn.addEventListener("click", function () {
    hideIcons();

    if (!req) {
        mobMenuPage();
        console.log("menuBar open/close log");
    } else if (req == "mob-srhBar") {
        mobSrhPage();
        req = "";
        console.log("srhBar closing log");
    } else if (req == "mob-cartBar") {
        mobCartPage();
        req = "";
        console.log("cartBar closing log");
    } else if (req == "mob-storeMenu") {
        subMenuPageExit(mobMenuStore);
        req = "";
        console.log("storeMenu closing log");
    } else if (req == "mob-macMenu") {
        subMenuPageExit(mobMenuMac);
        req = "";
        console.log("macMenu closing log");
    } else if (req == "mob-ipadMenu") {
        subMenuPageExit(mobMenuiPad);
        req = "";
        console.log("iPadMenu closing log");
    } else if (req == "mob-iphoneMenu") {
        subMenuPageExit(mobMenuiPhone);
        req = "";
        console.log("iPhoneMenu closing log");
    } else if (req == "mob-watchMenu") {
        subMenuPageExit(mobMenuWatch);
        req = "";
        console.log("watchMenu closing log");
    } else if (req == "mob-podsMenu") {
        subMenuPageExit(mobMenuPods);
        req = "";
        console.log("AirPodsMenu closing log");
    } else if (req == "mob-tvMenu") {
        subMenuPageExit(mobMenuTV);
        req = "";
        console.log("TVMenu closing log");
    } else if (req == "mob-entMenu") {
        subMenuPageExit(mobMenuEnt);
        req = "";
        console.log("entMenu closing log");
    } else if (req == "mob-accMenu") {
        subMenuPageExit(mobMenuAcc);
        req = "";
        console.log("accMenu closing log");
    } else if (req == "mob-supMenu") {
        subMenuPageExit(mobMenuSup);
        req = "";
        console.log("supMenu closing log");
    }
});

// searchBar
const mobSrhBar = document.getElementById("mob-nav-srhBar");
const mobSrhCls = document.getElementById("srhBar-icon-cls");
const mobSrhInp = document.getElementById("srhBar-inp");
const mobSrhTop = document.getElementById("srhBar-top");
const mobSrhBott = document.getElementById("srhBar-bottom");

function mobSrhPage() {
    mobSrhBar.classList.toggle("mob-srhbar-vis");
    mobSrhTop.classList.toggle("content-vis");
    mobSrhBott.classList.toggle("content-vis");
};

mobSrh.addEventListener("click", function () {
    hideIcons();
    mobSrhPage();
    req = "mob-srhBar";
});

mobSrhInp.addEventListener("keyup", function () {
    mobSrhCls.classList.add("cls-vis");
    if (mobSrhInp.value == "") {
        mobSrhCls.classList.remove("cls-vis");
    };
});

mobSrhCls.addEventListener("click", function () {
    mobSrhInp.value = "";
    mobSrhCls.classList.remove("cls-vis");
});

// cartBar

const mobCartBar = document.getElementById("mob-nav-cartBar");
const mobCartBarTop = document.getElementById("cartBar-top");
const mobCartBarBott = document.getElementById("cartBar-bottom");

function mobCartPage() {
    mobCartBar.classList.toggle("mob-cartBar-vis");
    mobCartBarTop.classList.toggle("content-vis");
    mobCartBarBott.classList.toggle("content-vis");
};

mobCart.addEventListener("click", function () {
    hideIcons();
    mobCartPage();
    req = "mob-cartBar";
});

// mobile menu

const mobMenu = document.getElementById("mobMenu");
const mobMenuCon = document.getElementById("mobMenu-con");

// mobile menu page open
function mobMenuPage() {
    mobMenu.classList.toggle("mobmenu-vis");
    mobMenuCon.classList.toggle("mobMenu-con-vis");
};

// mobile menu and sub menu close using cross button
function subMenuPageExit(name) {
    name.classList.remove("mobMenu-page-vis");
    mobBackBtn.classList.remove("mob-back-btn-vis");

    executeAfter();

    mobMenu.classList.remove("mobMenu-hide");
    mobMenuCon.classList.remove("mobMenu-con-vis");
    mobMenu.classList.remove("mobmenu-vis");
};

// sub menu open
function subMenuPageOpen(name) {
    mobMenu.style.transition = "0.2s ease-in";
    mobMenuCon.style.transition = "0.2s ease-in";

    mobMenu.classList.add("mobMenu-hide");
    mobMenuCon.classList.remove("mobMenu-con-vis");

    setTimeout(() => {
        name.classList.add("mobMenu-page-vis");
        mobBackBtn.classList.add("mob-back-btn-vis");
    }, 150);
};

// sub menu close using back button
function subMenuPageClose(name) {

    name.classList.remove("mobMenu-page-vis");
    mobBackBtn.classList.remove("mob-back-btn-vis");

    setTimeout(() => {
        mobMenu.classList.remove("mobMenu-hide");
        mobMenuCon.classList.add("mobMenu-con-vis");

        setTimeout(() => {
            executeAfter();
        }, 201);

    }, 200);
};

// for transition
function executeAfter() {
    mobMenu.style.transition = "0.5s ease-in";
    mobMenuCon.style.transition = "0.5s ease-in";
};

// mobile menu backbtn

const mobBackBtn = document.getElementById("mob-back-btn");

mobBackBtn.addEventListener("click", function () {

    if (req == "mob-storeMenu") {
        subMenuPageClose(mobMenuStore);
        console.log("storeMenu backBtn log");
        req = "";
    } else if (req == "mob-macMenu") {
        subMenuPageClose(mobMenuMac);
        console.log("macMenu backBtn log");
        req = "";
    } else if (req == "mob-ipadMenu") {
        subMenuPageClose(mobMenuiPad);
        console.log("iPadMenu backBtn log");
        req = "";
    } else if (req == "mob-iphoneMenu") {
        subMenuPageClose(mobMenuiPhone);
        console.log("iPhoneMenu backBtn log");
        req = "";
    } else if (req == "mob-watchMenu") {
        subMenuPageClose(mobMenuWatch);
        console.log("watchMenu backBtn log");
        req = "";
    } else if (req == "mob-podsMenu") {
        subMenuPageClose(mobMenuPods);
        console.log("podsMenu backBtn log");
        req = "";
    } else if (req == "mob-tvMenu") {
        subMenuPageClose(mobMenuTV);
        console.log("TVMenu backBtn log");
        req = "";
    } else if (req == "mob-entMenu") {
        subMenuPageClose(mobMenuEnt);
        console.log("entMenu backBtn log");
        req = "";
    } else if (req == "mob-accMenu") {
        subMenuPageClose(mobMenuAcc);
        console.log("accMenu backBtn log");
        req = "";
    } else if (req == "mob-supMenu") {
        subMenuPageClose(mobMenuSup);
        console.log("supMenu backBtn log");
        req = "";
    }
})

// mobile menu store
const mobMenuLinkStore = document.getElementById("mobMenu-store");
const mobMenuStore = document.getElementById("mobMenu-store-page");

mobMenuLinkStore.addEventListener("click", function () {
    subMenuPageOpen(mobMenuStore);
    req = "mob-storeMenu";
});

// mobile menu mac

const mobMenuLinkMac = document.getElementById("mobMenu-mac");
const mobMenuMac = document.getElementById("mobMenu-mac-page");

mobMenuLinkMac.addEventListener("click", function () {
    subMenuPageOpen(mobMenuMac);
    req = "mob-macMenu";
});

// mobile menu iPad

const mobMenuLinkiPad = document.getElementById("mobMenu-ipad");
const mobMenuiPad = document.getElementById("mobMenu-ipad-page");

mobMenuLinkiPad.addEventListener("click", function () {
    subMenuPageOpen(mobMenuiPad);
    req = "mob-ipadMenu";
});

// mobile menu iPhone

const mobMenuLinkiPhone = document.getElementById("mobMenu-iphone");
const mobMenuiPhone = document.getElementById("mobMenu-iphone-page");

mobMenuLinkiPhone.addEventListener("click", function () {
    subMenuPageOpen(mobMenuiPhone);
    req = "mob-iphoneMenu";
});

// mobile menu Watch

const mobMenuLinkWatch = document.getElementById("mobMenu-watch");
const mobMenuWatch = document.getElementById("mobMenu-watch-page");

mobMenuLinkWatch.addEventListener("click", function () {
    subMenuPageOpen(mobMenuWatch);
    req = "mob-watchMenu";
});

// mobile menu AirPods

const mobMenuLinkPods = document.getElementById("mobMenu-pods");
const mobMenuPods = document.getElementById("mobMenu-pods-page");

mobMenuLinkPods.addEventListener("click", function () {
    subMenuPageOpen(mobMenuPods);
    req = "mob-podsMenu";
});

// mobile menu TV & Home

const mobMenuLinkTV = document.getElementById("mobMenu-tv");
const mobMenuTV = document.getElementById("mobMenu-tv-page");

mobMenuLinkTV.addEventListener("click", function () {
    subMenuPageOpen(mobMenuTV);
    req = "mob-tvMenu";
});

// mobile menu Entertainment

const mobMenuLinkEnt = document.getElementById("mobMenu-ent");
const mobMenuEnt = document.getElementById("mobMenu-ent-page");

mobMenuLinkEnt.addEventListener("click", function () {
    subMenuPageOpen(mobMenuEnt);
    req = "mob-entMenu";
});

// mobile menu Accessories

const mobMenuLinkAcc = document.getElementById("mobMenu-acc");
const mobMenuAcc = document.getElementById("mobMenu-acc-page");

mobMenuLinkAcc.addEventListener("click", function () {
    subMenuPageOpen(mobMenuAcc);
    req = "mob-accMenu";
});

// mobile menu Support

const mobMenuLinkSup = document.getElementById("mobMenu-sup");
const mobMenuSup = document.getElementById("mobMenu-sup-page");

mobMenuLinkSup.addEventListener("click", function () {
    subMenuPageOpen(mobMenuSup);
    req = "mob-supMenu";
});


/*****   Big Screens    *****/

// logo
const bigLogo = document.getElementById("big-nav-logo");

bigLogo.addEventListener("click", function () {
    window.location.href = "apple.html";
});

// bigMenu search

const bigSrh = document.getElementById("big-nav-srh");
const bigSrhInp = document.getElementById("bigMenu-srh-inp");
const bigSrhCls = document.getElementById("bigMenu-srh-cls");

bigSrh.addEventListener("mouseenter", function () {
    head.classList.add("black");
    main.classList.add("main-blur");
});

bigSrh.addEventListener("mouseleave", function () {
    head.classList.remove("black");
    main.classList.remove("main-blur");
});

bigSrhInp.addEventListener("keyup", function () {
    bigSrhCls.classList.add("bigMenu-srh-cls-vis");
    if (bigSrhInp.value == "") {
        bigSrhCls.classList.remove("bigMenu-srh-cls-vis");
    }
});

bigSrhCls.addEventListener("click", function () {
    bigSrhInp.value = "";
    bigSrhCls.classList.remove("bigMenu-srh-cls-vis");
});

// bigMenu Cart

const bigCart = document.getElementById("big-nav-cart");

bigCart.addEventListener("mouseenter", function () {
    head.classList.add("black");
    main.classList.remove("main-blur");
});

bigCart.addEventListener("mouseleave", function () {
    head.classList.remove("black");
    main.classList.remove("main-blur");
});

// main blur effect
const main = document.getElementById("main");
const bigNavItem = document.querySelectorAll(".big-nav-item");

bigNavItem.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
        head.classList.add("black");
        main.classList.add("main-blur");
    })

    element.addEventListener("mouseleave", function () {
        head.classList.remove("black");
        main.classList.remove("main-blur");
    })
})

// carousel

const dot1 = document.querySelector(".dot-1");
const dot2 = document.querySelector(".dot-2");
const dot3 = document.querySelector(".dot-3");
const dot4 = document.querySelector(".dot-4");
const dot5 = document.querySelector(".dot-5");
const dot6 = document.querySelector(".dot-6");
const dot7 = document.querySelector(".dot-7");
const dot8 = document.querySelector(".dot-8");
const dot9 = document.querySelector(".dot-9");

const slider = document.querySelector(".slider");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const img1 = document.querySelector(".img-1");
let imgWidth="";
let flow = 0;
let check = 0;

const body = document.querySelector("body");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
let autoPlay = "";
let move = 0;

let count = 0;

slider.children.item(4).classList.add("img-vis");

function nextSlider() {
    imgWidth = img1.getBoundingClientRect().width;
    slider.style.transform = `translateX(-${imgWidth + 15}px)`;

    slider.children.item(4).classList.remove("img-vis");
    slider.children.item(5).classList.add("img-vis");

    flow = 1;
    check = 1;
}

function prevSlider() {
    imgWidth = img1.getBoundingClientRect().width;
    slider.style.transform = `translateX(${imgWidth + 15}px)`;

    slider.children.item(4).classList.remove("img-vis");
    slider.children.item(3).classList.add("img-vis");

    flow = -1;
    check = 1;
}

function addChild() {
    if (check === 1) {
        if (flow === 1) {
            slider.appendChild(slider.firstElementChild);
            check = 0;

            count++;
            if (count > 8) {
                count = 0;
            }
            dotColor();
        } else if (flow === -1) {
            slider.prepend(slider.lastElementChild);
            check = 0;

            count--;
            if (count < 0) {
                count = 8;
            }
            dotColor();
        }

        slider.style.transition = "none";
        slider.style.transform = `translateX(0)`;
        setTimeout(() => {
            slider.style.transition = "0.5s ease";
        });
    }
}

function stopInterval() {
    pause.style.display = "none";
    play.style.display = "block";
    clearInterval(autoPlay);
}

next.addEventListener("click", function () {
    nextSlider();

    stopInterval();
});

prev.addEventListener("click", function () {
    prevSlider();

    stopInterval();
});

slider.addEventListener("transitionend", function () {
    addChild();
});

pause.addEventListener("click", function () {
    stopInterval();
    move = 1;
});

play.addEventListener("click", function () {
    play.style.display = "none";
    pause.style.display = "block";

    move = 0;
    // autoStart();
});

// function autoStart() {
//     autoPlay = setInterval(() => {
//         nextSlider();
//     }, 3000);
// };

// body.addEventListener("onload", autoStart());

function dotColor() {
    dot1.classList.remove("dot-dark");
    dot2.classList.remove("dot-dark");
    dot3.classList.remove("dot-dark");
    dot4.classList.remove("dot-dark");
    dot5.classList.remove("dot-dark");
    dot6.classList.remove("dot-dark");
    dot7.classList.remove("dot-dark");
    dot8.classList.remove("dot-dark");
    dot9.classList.remove("dot-dark");


    if (count === 0) {
        dot1.classList.add("dot-dark");
    } else if (count === 1) {
        dot2.classList.add("dot-dark");
    } else if (count === 2) {
        dot3.classList.add("dot-dark");
    } else if (count === 3) {
        dot4.classList.add("dot-dark");
    } else if (count === 4) {
        dot5.classList.add("dot-dark");
    } else if (count === 5) {
        dot6.classList.add("dot-dark");
    } else if (count === 6) {
        dot7.classList.add("dot-dark");
    } else if (count === 7) {
        dot8.classList.add("dot-dark");
    } else if (count === 8) {
        dot9.classList.add("dot-dark");
    }
};

body.addEventListener("onload", dotColor());

dot1.addEventListener("click", function () {
    stopInterval();
    for (let i = count; i > 0; i--) {
        setTimeout(function () {
            slider.style.transition = "0.1s ease";
            prev.click();
        }, i * 180);
    }
});

dot9.addEventListener("click", function () {
    stopInterval();
    for (let i = count; i < 8; i++) {
        setTimeout(function () {
            slider.style.transition = "0.1s ease";
            next.click();
        }, i * 180);
    }
});

function dotChange(val) {
    stopInterval();
    if (count > val) {
        for (let i = count; i > val; i--) {
            setTimeout(function () {
                slider.style.transition = "0.1s ease";
                prev.click();
            }, i * 180);
        }
        console.log(count);
    } else if (count < val) {
        for (let i = count; i < val; i++) {
            setTimeout(function () {
                slider.style.transition = "0.1s ease";
                next.click();
            }, i * 180);
        }
    }
}

dot2.addEventListener("click", function () {
    dotChange(1);
});

dot3.addEventListener("click", function () {
    dotChange(2);
});

dot4.addEventListener("click", function () {
    dotChange(3);
});

dot5.addEventListener("click", function () {
    dotChange(4);
});

dot6.addEventListener("click", function () {
    dotChange(5);
});

dot7.addEventListener("click", function () {
    dotChange(6);
});

dot8.addEventListener("click", function () {
    dotChange(7);
});