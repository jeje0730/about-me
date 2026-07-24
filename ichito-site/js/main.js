document.addEventListener("DOMContentLoaded", () => {
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
const menuOverlay = document.querySelector(".menu-overlay");
const navigationLinks = document.querySelectorAll(".navigation a");

if (!menuToggle || !navigation || !menuOverlay) {
    return;
}

const openMenu = () => {
    menuToggle.classList.add("is-active");
    navigation.classList.add("is-active");
    menuOverlay.classList.add("is-active");
    document.body.classList.add("menu-open");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute(
    "aria-label",
    "メニューを閉じる"
    );
};

const closeMenu = () => {
    menuToggle.classList.remove("is-active");
    navigation.classList.remove("is-active");
    menuOverlay.classList.remove("is-active");
    document.body.classList.remove("menu-open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute(
    "aria-label",
    "メニューを開く"
    );
};

menuToggle.addEventListener("click", () => {
    const isOpen =
    menuToggle.getAttribute("aria-expanded") === "true";

    if (isOpen) {
    closeMenu();
    } else {
    openMenu();
    }
});

menuOverlay.addEventListener("click", closeMenu);

navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
    closeMenu();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 800) {
    closeMenu();
    }
});
});