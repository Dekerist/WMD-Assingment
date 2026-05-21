/**
 * Shared navigation — single source of truth for all pages.
 * Set <body data-page="home|about|schedule|team|shop|contact"> on each page.
 */
(function () {
  const LOGO =
    "https://github.com/Dekerist/WMD-Assingment/blob/main/Copilot_20260425_010734.png?raw=true";

  const NAV_ITEMS = [
    { page: "home", href: "index.html", label: "Home" },
    { page: "about", href: "about.html", label: "About" },
    { page: "schedule", href: "schedule&rankings.html", label: "Schedule & Rankings" },
    { page: "team", href: "team.html", label: "Team" },
    { page: "shop", href: "shop.html", label: "Shop" },
    { page: "contact", href: "contact.html", label: "Contact" },
  ];

  function renderNavbar(currentPage) {
    const links = NAV_ITEMS.map(function (item) {
      const isActive = item.page === currentPage;
      const linkClass = isActive ? "nav-link active" : "nav-link";
      const aria = isActive ? ' aria-current="page"' : "";
      return (
        '<li class="nav-item"><a class="' +
        linkClass +
        '" href="' +
        item.href +
        '"' +
        aria +
        ">" +
        item.label +
        "</a></li>"
      );
    }).join("");

    return (
      '<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-dark-subtle" aria-label="Main navigation">' +
      '<div class="container">' +
      '<a class="navbar-brand d-flex align-items-center gap-2" href="index.html">' +
      '<img src="' +
      LOGO +
      '" alt="Ditswametsing FC logo" width="36" height="36" class="rounded" decoding="async">' +
      '<span class="d-flex flex-column lh-1">' +
      '<strong class="fw-semibold">DITSWAMETSING FC</strong>' +
      '<small class="text-secondary navbar-tagline">2nd in Bots Pro League</small>' +
      "</span></a>" +
      '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" ' +
      'aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">' +
      '<span class="navbar-toggler-icon"></span></button>' +
      '<div class="collapse navbar-collapse" id="mainNavbar">' +
      '<ul class="navbar-nav ms-auto mb-2 mb-lg-0">' +
      links +
      "</ul></div></div></nav>"
    );
  }

  function initNavbar() {
    var mount = document.getElementById("site-nav");
    if (!mount) return;
    var currentPage = document.body.getAttribute("data-page") || "";
    mount.innerHTML = renderNavbar(currentPage);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNavbar);
  } else {
    initNavbar();
  }
})();
