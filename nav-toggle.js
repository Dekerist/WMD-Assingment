/**
 * Mobile navbar toggle — plain JS, works on phones even if Bootstrap JS does not load.
 */
(function () {
  function toggleMenu(toggler, menu) {
    var isOpen = menu.classList.toggle("show");
    toggler.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  function closeMenu(toggler, menu) {
    menu.classList.remove("show");
    toggler.setAttribute("aria-expanded", "false");
  }

  function setupNavbarToggle() {
    var toggler = document.querySelector(".navbar-toggler");
    var menu = document.getElementById("mainNavbar");
    if (!toggler || !menu) return;

    toggler.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      toggleMenu(toggler, menu);
    });

    menu.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 991.98px)").matches) {
          closeMenu(toggler, menu);
        }
      });
    });

    document.addEventListener("click", function (event) {
      if (!menu.classList.contains("show")) return;
      if (menu.contains(event.target) || toggler.contains(event.target)) return;
      closeMenu(toggler, menu);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupNavbarToggle);
  } else {
    setupNavbarToggle();
  }
})();
