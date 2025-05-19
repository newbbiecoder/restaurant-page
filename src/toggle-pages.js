import { showMenu, closeMenu } from "./menu-page";
import { showAbout, closeAbout } from "./about-page";

const banner = document.querySelector('.banner');
const content = document.querySelector('.content');

function hideALlViews(){
    banner.style.display = "none";
    content.style.display = "none";
    closeMenu();
    closeAbout();
}

function showHome(){
    hideALlViews();
    banner.style.display = "block";
    content.style.display = "block";
}

export default function navigateTo(page){
    hideALlViews();

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
    }  
}

