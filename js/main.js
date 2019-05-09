// THIS IS THE FUNCTION FOR THE NAVBAR
let navToggleState = false;

let navBtn = function() {
    let links = document.querySelectorAll(".links");

    if(navToggleState === false){
        for(let i = 0; i < links.length; i++) {
            links[i].style.left = "0.5rem";
        }

        navToggleState = true;

    } else if(navToggleState === true){
        for(let i = 0; i < links.length; i++) {
            links[i].style.left = "-5rem";
        }

        navToggleState = false;
    };
};

// THIS IS THE FUNCTION FOR THE CONTACT INFORMATION MENU
let toggleContactMenu = false;

let toggleMenu = function() {

    let buttonSwitch = document.querySelector(".main-button-toggle");
        cellNumber = document.querySelector(".phone");
        email = document.querySelector(".email");
        aboutMe = document.querySelector(".about-me");
        projects = document.querySelector(".portfolio");

        if (toggleContactMenu === false) {

            buttonSwitch.style.animation = "pulsating 0s ease infinite";
            buttonSwitch.style.width = "5rem";
            buttonSwitch.style.height = "5rem";
            buttonSwitch.style.background = "rgba(255, 0, 0, 0.3)";

            cellNumber.style.top = "0";
            cellNumber.style.opacity = "1";

            email.style.left = "0";
            email.style.opacity = "1";

            aboutMe.style.bottom = "0";
            aboutMe.style.opacity = "1";

            projects.style.right = "0";
            projects.style.opacity = "1";

            toggleContactMenu = true;
        }

        else if (toggleContactMenu === true) {

            buttonSwitch.style.animation = "pulsating 1.5s ease infinite";
            buttonSwitch.style.width = "3rem";
            buttonSwitch.style.height = "3rem";
            buttonSwitch.style.background = "rgba(255, 0, 0, 0.5)";

            cellNumber.style.top = "4rem";
            cellNumber.style.opacity = "0";

            email.style.left = "4rem";
            email.style.opacity = "0";

            aboutMe.style.bottom = "4rem";
            aboutMe.style.opacity = "0";

            projects.style.right = "4rem";
            projects.style.opacity = "0";

            toggleContactMenu = false;
        }
};

//
// window.onscroll = function() {myFunction()};
//
// function myFunction() {
//     if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
//         typeWriter();
//     }
// }
