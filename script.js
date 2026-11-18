
// ==============================
// MOBILE NAVIGATION MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isExpanded = navLinks.classList.contains("active");

        menuBtn.setAttribute("aria-expanded", isExpanded);
        menuBtn.textContent = isExpanded ? "✕" : "☰";

    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");
            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.textContent = "☰";

        });

    });

}

// ==============================
// FOOTER CURRENT YEAR
// ==============================

const footer = document.querySelector("footer p");

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} Y. Abhinandan. All Rights Reserved.`;
}

console.log("Abhinandan Portfolio Loaded Successfully!");


