import "./styles.css";
import "@mdi/font/css/materialdesignicons.min.css";
import { home } from "./home.js";
import { about } from "./about.js";
import { contact } from "./contact.js";
import { menu } from "./menu.js";

const main = document.querySelector('.content');
const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const aboutBtn = document.querySelector(".about");
const contactBtn = document.querySelector(".contact");

main.appendChild(home());
const order = document.querySelector(".orderBtn");

order.addEventListener("click", () => {
    main.innerHTML = "";
    main.appendChild(menu());
})

homeBtn.addEventListener("click", () => {
    main.innerHTML = "";
    main.appendChild(home());
    const order = document.querySelector(".orderBtn");
    order.addEventListener("click", () => {
        main.innerHTML = "";
        main.appendChild(menu());
    });
});

menuBtn.addEventListener("click", () => {
    main.innerHTML = "";
    main.appendChild(menu());
});

aboutBtn.addEventListener("click", () => {
    main.innerHTML = "";
    main.appendChild(about());
});

contactBtn.addEventListener("click", () => {
    main.innerHTML = "";
    main.appendChild(contact());
});