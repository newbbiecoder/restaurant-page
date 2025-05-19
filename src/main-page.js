import "./style.css";
import food_2 from "./assets/images/food2.png";
import food_1 from "./assets/images/food1.png";

const content = document.querySelector('.content');

// Append food1 to content
const food1 = document.createElement('div');
food1.classList.add('food1');
content.appendChild(food1);

// Append Food1 description to food1
const food1_description = document.createElement('div');
food1_description.classList.add('food1_description');
food1.appendChild(food1_description);

// Append intro to food1_description
const food1_intro = document.createElement('div');
food1_intro.classList.add('intro');
food1_description.appendChild(food1_intro);

// Append heading and description to intro
const food1_heading = document.createElement('h1');
food1_heading.textContent = 'Taste the Difference';
food1_intro.appendChild(food1_heading);

const food1_info = document.createElement('p');
food1_info.textContent = "At our restaurant, we bring you a diverse menu inspired by global cuisines, prepared with the finest locally sourced ingredients. Whether you're craving classic comfort food or adventurous new flavors, every bite promises to excite your palate. Come enjoy great food, great company, and a cozy ambiance.";
food1_intro.appendChild(food1_info);

// Append food1 image to food1_description
const food1_image = document.createElement('img');
food1_image.setAttribute("src", food_1);
food1_image.classList.add('food1_image');
food1_description.appendChild(food1_image);


// Append food2 to content
const food2 = document.createElement('div');
food2.classList.add('food2');
content.appendChild(food2);

// Append food2_description to food2
const food2_description = document.createElement('div');
food2_description.classList.add('food2_description');
food2.appendChild(food2_description);

// Append intro to food2_description
const food2_intro = document.createElement('div');
food2_intro.classList.add('intro');
food2_description.appendChild(food2_intro);

// Append heading and description to intro
const food2_heading = document.createElement('h1');
food2_heading.textContent = "Savor Every Moment";
food2_intro.appendChild(food2_heading);

const food2_info = document.createElement('p');
food2_info.textContent = "Step into a world of delicious possibilities where passion meets flavor. Our chefs create each dish with care, blending traditional recipes with modern twists. Perfect for family dinners, date nights, or casual outings—your perfect meal awaits here.";
food2_intro.appendChild(food2_info);

// Append image to food2_description
const food2_image = document.createElement('img');
food2_image.src = food_2;
food2_image.setAttribute("alt", "anime-ahh-food");
food2_image.classList.add('food2_image');
food2_description.appendChild(food2_image);


const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');


import navigateTo from "./toggle-pages";

home.addEventListener('click', () => {
    navigateTo('home');
});

menu.addEventListener('click', () => {
    navigateTo('menu');
});

about.addEventListener('click', () => {
    navigateTo('about');
})