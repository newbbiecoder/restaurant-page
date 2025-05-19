import kawaii_menu_logo from "./assets/images/kawaii_menu_logo.png";
import appetizer from "./assets/images/appetizer.jpg";
import bento_love_box from "./assets/images/bento_love_box.jpg";
import bubble_tea from "./assets/images/bubble_tea.jpg";
import mochi_ice_cream from "./assets/images/mochi-ice-cream.jpg";
import "./style.css";

const menu_container = document.createElement('div');
let menu_opened = false;
function showMenu(){
    if(!menu_opened){
        menu_container.classList.add('menu_container');
        const menu_image = document.createElement('img');
        menu_image.src = kawaii_menu_logo;
        menu_image.height = "300";
        menu_image.width = "800";
        menu_container.appendChild(menu_image);
        document.body.appendChild(menu_container);
        menu_opened = true;

        const menu_items = document.createElement('div')
        menu_items.classList.add('menu_items');
        menu_container.appendChild(menu_items)

        // APPETIZERS
        const appetizers = document.createElement('div');
        appetizers.classList.add('appetizers');
        const appetizers_heading = document.createElement('h1');
        appetizers_heading.textContent = "Appetizers";
        appetizers.appendChild(appetizers_heading);
        menu_items.appendChild(appetizers);

        const first_food = document.createElement('p');
        first_food.textContent = "❤️Mochi Cheese Bites..... $10";
        appetizers.appendChild(first_food);

        const second_food = document.createElement('p');
        second_food.textContent = "❤️Edamame Clouds........ $13";
        appetizers.appendChild(second_food);

        const third_food = document.createElement('p');
        third_food.textContent = "❤️Mini Tempura Hearts.. $15";
        appetizers.appendChild(third_food);

        // MAIN COURSE
        const main_course = document.createElement('div');
        main_course.classList.add('main-course');
        const main_course_heading = document.createElement('h1');
        main_course_heading.textContent = "Main Course";
        main_course.appendChild(main_course_heading);
        menu_items.appendChild(main_course);

        const fourth_food = document.createElement('p');
        fourth_food.textContent = "🩷Bento Love Box.... $25";
        main_course.appendChild(fourth_food);

        const fifth_food = document.createElement('p');
        fifth_food.textContent = "🩷Ramen Hug Bowl.... $19";
        main_course.appendChild(fifth_food);

        const sixth_food = document.createElement('p');
        sixth_food.textContent = "🩷Curry Cutie Plate... $30";
        main_course.appendChild(sixth_food);
        
        // DESSERTS
        const desserts = document.createElement('div');
        desserts.classList.add('desserts');
        const desserts_heading = document.createElement('h1');
        desserts_heading.textContent = "Desserts";
        desserts.appendChild(desserts_heading);
        menu_items.appendChild(desserts);

        const seventh_food = document.createElement('p');
        seventh_food.textContent = "💙Strawberry Tower.... $7";
        desserts.appendChild(seventh_food);

        const eighth_food = document.createElement('p');
        eighth_food.textContent = "💙Mochi Ice Cream..... $11";
        desserts.appendChild(eighth_food);

        const ninth_food = document.createElement('p');
        ninth_food.textContent = "💙Fluffy Pancake....... $16";
        desserts.appendChild(ninth_food);

        // DRINKS
        const drinks = document.createElement('div');
        drinks.classList.add('drinks');
        const drinks_heading = document.createElement('h1');
        drinks_heading.textContent = "Drinks";
        drinks.appendChild(drinks_heading);
        menu_items.appendChild(drinks);

        const tenth_food = document.createElement('p');
        tenth_food.textContent = "💚Bubble Tea Bliss... $5";
        drinks.appendChild(tenth_food);

        const eleventh_food = document.createElement('p');
        eleventh_food.textContent = "💚Sakura Lemonade... $9";
        drinks.appendChild(eleventh_food);

        const twelvth_food = document.createElement('p');
        twelvth_food.textContent = "💚Iced Matcha Latte.. $10";
        drinks.appendChild(twelvth_food);

        // IMAGES

        const food_images = document.createElement('div');
        food_images.classList.add('food_images');
        menu_container.insertBefore(food_images, menu_container.children[1]);

        const appetizer_image = document.createElement('img');
        appetizer_image.src = appetizer;
        appetizer_image.classList.add('menu_food_images');
        food_images.appendChild(appetizer_image);

        const bento_love_box_image = document.createElement('img');
        bento_love_box_image.src = bento_love_box;
        bento_love_box_image.classList.add('menu_food_images');
        food_images.append(bento_love_box_image);

        const mochi_ice_cream_image = document.createElement('img');
        mochi_ice_cream_image.src = mochi_ice_cream;
        mochi_ice_cream_image.classList.add('menu_food_images');
        food_images.append(mochi_ice_cream_image);

        const bubble_tea_image = document.createElement('img');
        bubble_tea_image.src = bubble_tea;
        bubble_tea_image.classList.add('menu_food_images');
        food_images.append(bubble_tea_image);
        
    }

    menu_container.style.display = "block";
}

function closeMenu(){
    menu_container.style.display = "none";
}


export {showMenu, closeMenu};