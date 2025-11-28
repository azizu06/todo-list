function contact() {
    const bigContainer = document.createElement("div");
    const container = document.createElement("div");
    const textContainer = document.createElement("div");
    const mapContainer = document.createElement("div");
    const title = document.createElement("h1");
    const row1 = document.createElement("div");
    const row2 = document.createElement("div");
    const row3 = document.createElement("div");
    const row4 = document.createElement("div");
    const row5 = document.createElement("div");
    const locationI = document.createElement("i");
    const phoneI = document.createElement("i");
    const emailI = document.createElement("i");
    const igI = document.createElement("i");
    const hoursI = document.createElement("i");
    const location = document.createElement("p");
    const phone = document.createElement("p");
    const email = document.createElement("p");
    const ig = document.createElement("p");
    const hours = document.createElement("p");

    title.innerText = "Where You Can Find Us";
    location.innerText = "8015 S Orange Ave, Orlando, FL 32809, United States";
    phone.innerText = "(407) 555-9283";
    email.innerText = "contact@silkroaduzbekcuisine.com";
    ig.innerText = "@silkroad.uzbek";
    hours.innerText = "Monday – Sunday: 11:00 AM – 10:00 PM";
    locationI.classList.add("mdi", "mdi-map-marker");
    phoneI.classList.add("mdi", "mdi-phone");
    emailI.classList.add("mdi", "mdi-email");
    igI.classList.add("mdi", "mdi-instagram");
    hoursI.classList.add("mdi", "mdi-clock-outline");
    row1.appendChild(locationI);
    row1.appendChild(location);
    row2.appendChild(phoneI);
    row2.appendChild(phone);
    row3.appendChild(emailI);
    row3.appendChild(email);
    row4.appendChild(igI);
    row4.appendChild(ig);
    row5.appendChild(hoursI);
    row5.appendChild(hours);
    textContainer.appendChild(title);
    textContainer.appendChild(row1);
    textContainer.appendChild(row2);
    textContainer.appendChild(row3);
    textContainer.appendChild(row4);
    textContainer.appendChild(row5);

    mapContainer.innerHTML = `
        <iframe
            width="600"
            height="450"
            style="border:0"
            loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.4848799146737!2d-81.37746862439264!3d28.458793475749826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77e6dc482e037%3A0x61a07675cb2db3eb!2s8015%20S%20Orange%20Ave%2C%20Orlando%2C%20FL%2032809!5e0!3m2!1sen!2sus!4v1732572388464!5m2!1sen!2sus">
        </iframe>
    `;

    
    container.classList.add("contactContainer");
    bigContainer.classList.add("bigContact");
    textContainer.classList.add("contactText");
    mapContainer.classList.add("contactMap");
    row1.classList.add("contactRow");
    row2.classList.add("contactRow");
    row3.classList.add("contactRow");
    row4.classList.add("contactRow");
    row5.classList.add("contactRow");

    container.appendChild(textContainer);
    container.appendChild(mapContainer);
    bigContainer.appendChild(container);
    return bigContainer
}

export { contact };