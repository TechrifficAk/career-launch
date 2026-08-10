const menu = document.querySelector(".menu-toggle");
menu.addEventListener("click", function () {
    console.log("Menu clicked!");
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("mobile-open"); /*it'll display */

    const navActions = document.querySelector(".nav-actions");
    navActions.classList.toggle("mobile-open");
        /*querySelector() → grab HTML elements
        addEventListener() → react to user actions
        classList.toggle() → add/remove a class*/



});

