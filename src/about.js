import chefImage from "./assets/chef.png";

function about() {
    const container = document.createElement("div");
    const image = document.createElement("img");
    image.src = chefImage;
    const chefContainer = document.createElement("div");
    chefContainer.appendChild(image);
    const textContainer = document.createElement("div");
    const who = document.createElement("div");
    const what = document.createElement("div");
    const values = document.createElement("div");
    const header1 = document.createElement("h1");
    const header2 = document.createElement("h1");
    const header3 = document.createElement("h1");
    const text1 = document.createElement("p");
    const text2 = document.createElement("p");
    const list = document.createElement("ul");
    const list1 = document.createElement("li");
    const list2= document.createElement("li");
    const list3 = document.createElement("li");

    header1.innerText = "Our History";
    header2.innerText = "Our Mission";
    header3.innerText = "Our Values";
    text1.innerText = "Our story begins in the heart of Uzbekistan, where food is more than a meal — it's a way of bringing people together. Growing up surrounded by the aromas of plov, freshly baked non, and sizzling shashlik, we dreamed of sharing these unforgettable flavors with the world. What started as a family passion has now become a place where tradition and hospitality come alive. Every recipe we use has been passed down through generations, keeping the spirit of Uzbek cooking at the core of everything we serve.";
    text2.innerText = "Our mission is simple: to bring authentic Uzbek cuisine to our community with honesty, warmth, and care. We are dedicated to preserving traditional recipes, using fresh ingredients, and crafting every dish with the same love found in an Uzbek home. Whether you’re discovering Uzbek food for the first time or reconnecting with the flavors of your childhood, we aim to create a welcoming space where everyone can experience the richness of our culture.";

    who.appendChild(header1);
    who.appendChild(text1);
    what.appendChild(header2);
    what.appendChild(text2);

    list1.innerHTML = "<strong>Heritage in Every Dish:</strong> We honor the centuries-old traditions of Uzbek cooking, preserving the flavors and techniques passed down through generations.";
    list2.innerHTML = "<strong>Quality Without Compromise:</strong> From hand-cut meats to freshly sourced vegetables and spices, we choose ingredients that bring authenticity and richness to every plate";
    list3.innerHTML = "<strong>Warmth & Hospitality:</strong> Uzbek culture treats guests as family. We aim to recreate that same welcoming spirit the moment you walk through our doors.";

    list.appendChild(list1);
    list.appendChild(list2);
    list.appendChild(list3);
    values.appendChild(header3);
    values.appendChild(list);
    
    container.classList.add("aboutContainer");
    textContainer.classList.add("aboutText");
    chefContainer.classList.add("aboutChef");
    who.classList.add("aboutRow");
    what.classList.add("aboutRow");
    values.classList.add("aboutRow");
    list.classList.add("list");
    textContainer.appendChild(who);
    textContainer.appendChild(what);
    textContainer.appendChild(values);
    container.appendChild(chefContainer);
    container.appendChild(textContainer);
    return container
}

export { about };