import cupcake_pic from "./assets/images/cupcake.png";
import visit_us_soon_pic from "./assets/images/visit_us_soon.png"

let about_opened = false;
const about_us = document.createElement('div');
function showAbout(){
    if(!about_opened){       
        about_us.classList.add('about_us');
        document.body.appendChild(about_us);

        const about_us_content = document.createElement('div');
        about_us_content.classList.add('about_us_content');
        about_us.appendChild(about_us_content)

        const about_us_heading = document.createElement('div');
        about_us_heading.classList.add('about_us_heading');
        about_us_heading.textContent = "About Us"
        about_us_content.appendChild(about_us_heading);

        const about_us_secondary_heading = document.createElement('div');
        about_us_secondary_heading.classList.add('about_us_secondary_heading');
        about_us_secondary_heading.textContent = "Welcome to Kawaii Kitchen!";
        about_us_content.appendChild(about_us_secondary_heading);

        const about_us_description = document.createElement('div');
        about_us_description.classList.add('about_us_description');

        const para1 = document.createElement('p');
        para1.innerHTML = "At Kawaii Bites, we believe that food should make you smile — not just from the taste, but from the moment you see it! <br />";
        about_us_description.appendChild(para1);

        const para2 = document.createElement('p');
        para2.innerHTML = "Founded with love in the heart of the city, our cozy little restaurant serves up dishes that are as adorable as they are delicious. Inspired by Japanese kawaii culture, each plate is designed to be a delightful treat for both your eyes and your tastebuds. <br />"
        about_us_description.appendChild(para2);

        const cupcake = document.createElement('img');
        cupcake.classList.add('cupcake');
        cupcake.src = cupcake_pic;
        about_us_description.appendChild(cupcake);

        const para3 = document.createElement('div');
        const inside_para3 = document.createElement('p');
        inside_para3.innerHTML = "🍔 What Makes Us Special?"
        inside_para3.classList.add('special');
        para3.appendChild(inside_para3);
        about_us_description.appendChild(para3);
        
        const para4 = document.createElement('p');
        para4.innerHTML = "• 🍱 Playfully plated comfort foods <br />• 🎀 Handcrafted desserts with personality <br />• 🍓 Fresh, colorful ingredients <br />• 💖 A warm, pastel-colored dining space that feels like a hug";
        para3.appendChild(para4);

        const cupcake_and_special = document.createElement('div');
        cupcake_and_special.classList.add('cupcake_and_special');
        cupcake_and_special.appendChild(cupcake);
        cupcake_and_special.appendChild(para3);
        about_us_description.appendChild(cupcake_and_special);

        const para5 = document.createElement('p');
        para5.innerHTML = "Whether you’re here for a cute cupcake, a bento box bursting with charm, or just to sip a strawberry soda under a ceiling of twinkling stars — you’ll always feel right at home.";
        about_us_description.appendChild(para5);

        about_us_content.appendChild(about_us_description);

        const visit_us_soon = document.createElement('img');
        visit_us_soon.classList.add('visit_us_soon');
        visit_us_soon.src = visit_us_soon_pic;
        about_us_content.appendChild(visit_us_soon);

        about_opened = true;
    }
    about_us.style.display = "block";
}

function closeAbout(){
    about_us.style.display = "none";
}

export {showAbout, closeAbout}