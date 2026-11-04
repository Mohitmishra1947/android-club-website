
/* =========================================
   1. SELECT HTML ELEMENTS
========================================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navigationItems = document.querySelectorAll(".nav-links a");


/* =========================================
   2. MOBILE MENU TOGGLE
========================================= */

menuToggle.addEventListener("click", () => {

    // Toggle the menu visibility
    navLinks.classList.toggle("active");

    // Animate the hamburger icon
    menuToggle.classList.toggle("active");

    // Update accessibility state
    const isExpanded = menuToggle.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isExpanded);

});


/* =========================================
   3. CLOSE MENU AFTER CLICKING A LINK
========================================= */

navigationItems.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


/* =========================================
   4. CLOSE MENU WHEN CLICKING OUTSIDE
========================================= */

document.addEventListener("click", (event) => {

    const clickedInsideMenu = navLinks.contains(event.target);

    const clickedMenuButton = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {

        navLinks.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});


/* =========================================
   5. CLOSE MENU WITH ESCAPE KEY
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        navLinks.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});
