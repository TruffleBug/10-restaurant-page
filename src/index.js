import "./styles.css";
import {homePage} from "./homePage.js";
import {menuPage} from "./menuPage.js";
import {aboutPage} from "./aboutPage.js";

const contentDiv = document.querySelector('#content');
const homeButton = document.querySelector('#homeButton');
const menuButton = document.querySelector('#menuButton');
const aboutButton = document.querySelector('#aboutButton');

homePage();

homeButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    homePage();
});

menuButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    menuPage();
});

aboutButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    aboutPage();
})