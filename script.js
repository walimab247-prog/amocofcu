/*
 * AMOCO Agency — reference site interactions
 * Independent informational/promotional site. Not affiliated with AMOCO Federal Credit Union.
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initNavbarScroll();
    initMobileMenu();
    initFaqAccordion();
    initSmoothAnchors();
    initFooterYear();
  });

  /* Add a solid/blurred background to the fixed navbar once the page is scrolled. */
  function initNavbarScroll() {
    var nav = document.querySelector('nav[data-section="navbar"]');
    if (!nav) return;
    var onScroll = function () {
      if (window.scrollY > 12) {
        nav.classList.add("nav-scrolled");
      } else {
        nav.classList.remove("nav-scrolled");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* Toggle the responsive mobile navigation panel. */
  function initMobileMenu() {
    var toggle = document.querySelector("[data-menu-toggle]");
    var menu = document.getElementById("mobile-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close the menu when a link inside it is clicked.
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* FAQ accordion: expand/collapse answers, allowing only one open at a time. */
  function initFaqAccordion() {
    var items = document.querySelectorAll(".faq-item");
    if (!items.length) return;

    items.forEach(function (item) {
      var header = item.querySelector(".faq-header");
      if (!header) return;
      header.setAttribute("role", "button");
      header.setAttribute("tabindex", "0");

      var toggle = function () {
        var willOpen = !item.classList.contains("faq-open");
        items.forEach(function (other) { other.classList.remove("faq-open"); });
        if (willOpen) item.classList.add("faq-open");
      };

      header.addEventListener("click", toggle);
      header.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  /* Smooth-scroll for in-page anchor links. */
  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener("click", function (e) {
        var id = link.getAttribute("href");
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /* Keep the footer copyright year current. */
  function initFooterYear() {
    document.querySelectorAll("[data-current-year]").forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }
})();
