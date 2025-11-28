function home() {
    const container = document.createElement("div");
    
    const textContainer = document.createElement("div");
    const headline = document.createElement("h1");
    const hook = document.createElement("p");
    const order = document.createElement("button");

    order.innerText = "Order Now"
    headline.innerText = "A Taste of Tradition from Authentic Uzbek Cuisine";
    hook.innerText = "Discover the rich flavors of Uzbekistan at our restaurant, where every dish is prepared using traditional recipes and the freshest ingredients.";

    container.classList.add("homeContainer");
    order.classList.add("orderBtn");
    textContainer.classList.add("homeText");
    textContainer.appendChild(headline);
    textContainer.appendChild(hook);
    textContainer.appendChild(order);
    container.appendChild(textContainer);
    return container
}

export { home };