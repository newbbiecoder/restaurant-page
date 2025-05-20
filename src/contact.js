let contact_opened = false;
import mochi_image from "./assets/images/mochi.png";
import tea_image from "./assets/images/tea.png";
import location_logo from "./assets/images/location_logo.png";
import call_logo from "./assets/images/call_logo.png";
import hours_logo from "./assets/images/hours_logo.png";
import contact_girl from "./assets/images/contact_girl.png";

const contactPage = document.createElement('div');
function showContact(){
    if(!contact_opened){

        contactPage.classList.add('contact-page');
        document.body.appendChild(contactPage);
        contactPage.innerHTML = "<span> Get in Touch With Us! <span />";

        const container = document.createElement('div');
        container.classList.add('contact-container');
        contactPage.appendChild(container);

        // Row 1
        const row1 = document.createElement('div');
        row1.classList.add('row1');
        container.appendChild(row1);

        // LOCATION
        const location = document.createElement('div');
        location.classList.add('location');
        row1.appendChild(location);

        // Location Image
        const location_image = document.createElement('img');
        location_image.classList.add('location-icon');
        location_image.src = location_logo;
        location.appendChild(location_image);

        // Location Content
        const location_content = document.createElement('div');
        location_content.classList.add('location-content');
        location.appendChild(location_content);
        // Location Heading
        const location_heading = document.createElement('h1');
        location_heading.innerHTML = "Our Location";
        location_content.appendChild(location_heading);
        // Location Description
        const location_description = document.createElement('p');
        location_description.innerHTML = "123 Kawaii Street, Mochi Town, Japan";
        location_content.appendChild(location_description)

        // CALL
        const call = document.createElement('div');
        call.classList.add('call');
        row1.appendChild(call);

        // Call Image
        const call_image = document.createElement('img');
        call_image.classList.add('call-icon');
        call_image.src = call_logo;
        call.appendChild(call_image);

        // Call Content
        const call_content = document.createElement('div');
        call_content.classList.add('call-content');
        call.appendChild(call_content);

        // Call Heading
        const call_heading = document.createElement('h1');
        call_heading.innerHTML = "Call Us";
        call_content.appendChild(call_heading);

        // Call Description
        const call_description = document.createElement('p');
        call_description.innerHTML = "+81 90-1234-5678";
        call_content.appendChild(call_description);

        // Hours
        const hours = document.createElement('div');
        hours.classList.add('hours');
        row1.appendChild(hours);

        // Hours Image
        const hour_image = document.createElement('img');
        hour_image.classList.add('hour-image');
        hour_image.src = hours_logo;
        hours.appendChild(hour_image);

        // Hours Content
        const hours_content = document.createElement('div');
        hours_content.classList.add('hours-content');
        hours.appendChild(hours_content);

        // Hours Heading
        const hours_heading = document.createElement('h1');
        hours_heading.innerHTML = "Business Hours";
        hours_content.appendChild(hours_heading);

        // Hours Description
        const hours_description = document.createElement('p');
        hours_description.innerHTML = "Monday - Friday: <br />10:00AM - 8:00Pm <br /><br />Saturday & Sunday: <br />11:00AM - 10:00PM";
        hours_content.appendChild(hours_description);

        // Outro Line
        const outro_line = document.createElement('div');
        outro_line.classList.add('outro-line');
        outro_line.innerHTML = "Thank you for visiting our sweet little spot on the web! 🌷 Drop by anytime — we’re always brewing happiness 🍶✨";
        row1.appendChild(outro_line)

        const mochi = document.createElement('img');
        mochi.classList.add('mochi-image');
        mochi.src = mochi_image;
        row1.appendChild(mochi);

        const tea = document.createElement('img');
        tea.classList.add('tea-image');
        tea.src = tea_image;
        row1.appendChild(tea);

        // Row 2
        const row2 = document.createElement('div');
        row2.classList.add('row2');
        container.appendChild(row2);

        // Form
        const form_container = document.createElement('form');
        form_container.classList.add('form');
        row2.appendChild(form_container);

        // Name
        const name = document.createElement('div')
        name.classList.add('name');
        form_container.appendChild(name);

        const name_label = document.createElement('label');
        name_label.classList.add('name_label');
        name_label.setAttribute('name', "name");
        name_label.innerHTML = "Name";
        name.appendChild(name_label);

        const name_input = document.createElement('input');
        name_input.classList.add('name_input');
        name_input.setAttribute('name', "name");
        name.appendChild(name_input);

        // Email
        const email = document.createElement('div')
        email.classList.add('email');
        form_container.appendChild(email);

        const email_label = document.createElement('label');
        email_label.classList.add('email_label');
        email_label.setAttribute('name', "email");
        email_label.innerHTML = "Email";
        email.appendChild(email_label);

        const email_input = document.createElement('input');
        email_input.classList.add('email_input');
        email_input.setAttribute('name', "email");
        email.appendChild(email_input);

        // Message
        const message = document.createElement('div')
        message.classList.add('message');
        form_container.appendChild(message);

        const message_label = document.createElement('label');
        message_label.classList.add('message_label');
        message_label.setAttribute('name', "message");
        message_label.innerHTML = "Message";
        message.appendChild(message_label);

        const message_input = document.createElement('textarea');
        message_input.classList.add('message_input');
        message_input.setAttribute('name', "message");
        message.appendChild(message_input);

        const anime_girl = document.createElement('img');
        anime_girl.classList.add('anime-girl');
        anime_girl.src = contact_girl;
        row2.appendChild(anime_girl);

        // Submit Button
        const submit = document.createElement('button');
        submit.setAttribute('type', 'submit');
        submit.classList.add('form-submit');
        submit.innerHTML = "Send Message!";
        form_container.appendChild(submit)

        contact_opened = true;
    }
    contactPage.style.display = "block";
}

function closeContact(){
    contactPage.style.display = "none";
}

export {showContact, closeContact};