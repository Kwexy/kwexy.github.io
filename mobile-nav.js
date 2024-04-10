var navMenu = document.querySelector(".navigation");
var headerButton = document.querySelector(".mobile-topnav-toggle");
headerButton.addEventListener("click", clicked);

function clicked () {
    var visibility = navMenu.getAttribute("data-visible");
    if (visibility == "false") {
    navMenu.setAttribute("data-visible", true);
    headerButton.setAttribute("mobile-expanded", true);
    } else {
    navMenu.setAttribute("data-visible", false);
    headerButton.setAttribute("mobile-expanded", false);
    }
}