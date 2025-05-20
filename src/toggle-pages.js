import { showMenu, closeMenu } from "./menu-page";
import { showAbout, closeAbout } from "./about-page";
import { showContact, closeContact } from "./contact";

const banner = document.querySelector('.banner');
const content = document.querySelector('.content');

function hideALlViews(){
    banner.style.display = "none";
    content.style.display = "none";
    closeMenu();
    closeAbout();
    closeContact();
}

const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');

function hideAllStyles(){
    home.style.color = "#814c4c";
    menu.style.color = "#814c4c";
    about.style.color = "#814c4c";
    contact.style.color = "#814c4c";
}

function showHome(){
    hideALlViews();
    banner.style.display = "block";
    content.style.display = "block";
}

export default function navigateTo(page){
    hideALlViews();
    hideAllStyles();

    switch(page){
        case "home":
            showHome();
            break;
        case "menu":
            showMenu();
            break;
        case "about":
            showAbout();
            break;
        case "contact":
            showContact();
    }  
}

