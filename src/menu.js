import beshImage from "./assets/besh.png";
import kabobImage from "./assets/kabob.png";
import kazanImage from "./assets/kazan.png";
import narynImage from "./assets/naryn.png";
import nonImage from "./assets/non.png";
import plovImage from "./assets/plov.png";
import saladImage from "./assets/salad.png";
import samsaImage from "./assets/samsa.png";
import lagmanImage from "./assets/lagman.png";
import mastavaImage from "./assets/mastava.png";

function menu() {
    const container = document.createElement("div");
    const bigContainer = document.createElement("div");
    const foodContainer = document.createElement("div");
    const menuTitle = document.createElement("h1");
    menuTitle.innerText = "Menu";
    container.appendChild(menuTitle);
    const besh = document.createElement("div");
    const kabob = document.createElement("div");
    const kazan = document.createElement("div");
    const lagman = document.createElement("div");
    const mastava = document.createElement("div");
    const naryn = document.createElement("div");
    const non = document.createElement("div");
    const plov = document.createElement("div");
    const salad = document.createElement("div");
    const samsa = document.createElement("div");

    const beshText = document.createElement("div");
    const kabobText = document.createElement("div");
    const kazanText = document.createElement("div");
    const lagmanText = document.createElement("div");
    const mastavaText = document.createElement("div");
    const narynText = document.createElement("div");
    const nonText = document.createElement("div");
    const plovText = document.createElement("div");
    const saladText = document.createElement("div");
    const samsaText = document.createElement("div");

    const beshI = document.createElement("img");
    const kabobI = document.createElement("img");
    const kazanI = document.createElement("img");
    const lagmanI = document.createElement("img");
    const mastavaI = document.createElement("img");
    const narynI = document.createElement("img");
    const nonI = document.createElement("img");
    const plovI = document.createElement("img");
    const saladI = document.createElement("img");
    const samsaI = document.createElement("img");

    const beshImages = document.createElement("div");
    const kabobImages = document.createElement("div");
    const kazanImages = document.createElement("div");
    const lagmanImages = document.createElement("div");
    const mastavaImages = document.createElement("div");
    const narynImages = document.createElement("div");
    const nonImages = document.createElement("div");
    const plovImages = document.createElement("div");
    const saladImages = document.createElement("div");
    const samsaImages = document.createElement("div");

    beshI.src = beshImage;
    kabobI.src = kabobImage;
    kazanI.src = kazanImage;
    lagmanI.src = lagmanImage;
    mastavaI.src = mastavaImage;
    narynI.src = narynImage;
    nonI.src = nonImage;
    plovI.src = plovImage;
    saladI.src = saladImage;
    samsaI.src = samsaImage;

    const beshT = document.createElement("h2");
    const kabobT = document.createElement("h2");
    const kazanT = document.createElement("h2");
    const lagmanT = document.createElement("h2");
    const mastavaT = document.createElement("h2");
    const narynT = document.createElement("h2");
    const nonT = document.createElement("h2");
    const plovT = document.createElement("h2");
    const saladT = document.createElement("h2");
    const samsaT = document.createElement("h2");

    const beshP = document.createElement("p");
    const kabobP = document.createElement("p");
    const kazanP = document.createElement("p");
    const lagmanP = document.createElement("p");
    const mastavaP = document.createElement("p");
    const narynP = document.createElement("p");
    const nonP = document.createElement("p");
    const plovP = document.createElement("p");
    const saladP = document.createElement("p");
    const samsaP = document.createElement("p");

    const beshC = document.createElement("h3");
    const kabobC = document.createElement("h3");
    const kazanC = document.createElement("h3");
    const lagmanC = document.createElement("h3");
    const mastavaC = document.createElement("h3");
    const narynC = document.createElement("h3");
    const nonC = document.createElement("h3");
    const plovC = document.createElement("h3");
    const saladC = document.createElement("h3");
    const samsaC = document.createElement("h3");


    beshT.innerText = "Beshbarmak";
    kabobT.innerText = "Shashlik";
    kazanT.innerText = "Kazan Kebab";
    lagmanT.innerText = "Lagman";
    mastavaT.innerText = "Mastava";
    narynT.innerText = "Naryn";
    nonT.innerText = "Uzbek Non";
    plovT.innerText = "Plov";
    saladT.innerText = "Achichuq Salad";
    samsaT.innerText = "Samsa";

    beshText.appendChild(beshT);
    kabobText.appendChild(kabobT);
    kazanText.appendChild(kazanT);
    lagmanText.appendChild(lagmanT);
    mastavaText.appendChild(mastavaT);
    narynText.appendChild(narynT);
    nonText.appendChild(nonT);
    plovText.appendChild(plovT);
    saladText.appendChild(saladT);
    samsaText.appendChild(samsaT);

    beshP.innerText = "Wide flat noodles topped with tender boiled meat and onions, a Central Asian celebratory dish.";
    kabobP.innerText = "Skewered and charcoal-grilled lamb cubes, marinated with spices and served with onions.";
    kazanP.innerText = "Crispy fried lamb chops and potatoes cooked in a kazan (cauldron) until golden and flavorful.";
    lagmanP.innerText = "Hand-pulled noodles served with stir-fried beef and vegetables in a rich, savory broth.";
    mastavaP.innerText = "Hearty rice and vegetable soup cooked with tender beef, served warm and fragrant with herbs.";
    narynP.innerText = "Cold noodle dish made with hand-cut noodles and finely shredded boiled meat, served with onions.";
    nonP.innerText = "Traditional round Uzbek bread baked in a clay oven, soft inside with a golden crust.";
    plovP.innerText = "Traditional Uzbek rice pilaf cooked with carrots, onions, and tender beef, simmered in aromatic spices.";
    saladP.innerText = "Fresh tomato and onion salad seasoned with black pepper and herbs; a refreshing classic side.";
    samsaP.innerText = "Crispy tandoor-baked pastries stuffed with seasoned lamb and onions, wrapped in flaky dough.";

    beshText.appendChild(beshP);
    kabobText.appendChild(kabobP);
    kazanText.appendChild(kazanP);
    lagmanText.appendChild(lagmanP);
    mastavaText.appendChild(mastavaP);
    narynText.appendChild(narynP);
    nonText.appendChild(nonP);
    plovText.appendChild(plovP);
    saladText.appendChild(saladP);
    samsaText.appendChild(samsaP);

    beshC.innerText = "$17.00";
    kabobC.innerText = "$16.00";
    kazanC.innerText = "$18.00";
    lagmanC.innerText = "$15.00";
    mastavaC.innerText = "$12.00";
    narynC.innerText = "$14.00";
    nonC.innerText = "$4.00";
    plovC.innerText = "$14.00";
    saladC.innerText = "$6.00";
    samsaC.innerText = "$7.00";

    beshText.appendChild(beshC);
    kabobText.appendChild(kabobC);
    kazanText.appendChild(kazanC);
    lagmanText.appendChild(lagmanC);
    mastavaText.appendChild(mastavaC);
    narynText.appendChild(narynC);
    nonText.appendChild(nonC);
    plovText.appendChild(plovC);
    saladText.appendChild(saladC);
    samsaText.appendChild(samsaC);

    besh.appendChild(beshText);
    kabob.appendChild(kabobText);
    kazan.appendChild(kazanText);
    lagman.appendChild(lagmanText);
    mastava.appendChild(mastavaText);
    naryn.appendChild(narynText);
    non.appendChild(nonText);
    plov.appendChild(plovText);
    salad.appendChild(saladText);
    samsa.appendChild(samsaText);

    beshImages.appendChild(beshI);
    kabobImages.appendChild(kabobI);
    kazanImages.appendChild(kazanI);
    lagmanImages.appendChild(lagmanI);
    mastavaImages.appendChild(mastavaI);
    narynImages.appendChild(narynI);
    nonImages.appendChild(nonI);
    plovImages.appendChild(plovI);
    saladImages.appendChild(saladI);
    samsaImages.appendChild(samsaI);

    besh.appendChild(beshImages);
    kabob.appendChild(kabobImages);
    kazan.appendChild(kazanImages);
    lagman.appendChild(lagmanImages);
    mastava.appendChild(mastavaImages);
    naryn.appendChild(narynImages);
    non.appendChild(nonImages);
    plov.appendChild(plovImages);
    salad.appendChild(saladImages);
    samsa.appendChild(samsaImages);

    foodContainer.appendChild(besh);
    foodContainer.appendChild(kabob);
    foodContainer.appendChild(kazan);
    foodContainer.appendChild(lagman);
    foodContainer.appendChild(mastava);
    foodContainer.appendChild(naryn);
    foodContainer.appendChild(non);
    foodContainer.appendChild(plov);
    foodContainer.appendChild(salad);
    foodContainer.appendChild(samsa);    
    
    container.classList.add("menuContainer");
    bigContainer.classList.add("bigMenu");
    foodContainer.classList.add("foodContainer")
    besh.classList.add("foodCard");
    kabob.classList.add("foodCard");
    kazan.classList.add("foodCard");
    lagman.classList.add("foodCard");
    mastava.classList.add("foodCard");
    naryn.classList.add("foodCard");
    non.classList.add("foodCard");
    plov.classList.add("foodCard");
    salad.classList.add("foodCard");
    samsa.classList.add("foodCard");

    beshText.classList.add("foodText");
    kabobText.classList.add("foodText");
    kazanText.classList.add("foodText");
    lagmanText.classList.add("foodText");
    mastavaText.classList.add("foodText");
    narynText.classList.add("foodText");
    nonText.classList.add("foodText");
    plovText.classList.add("foodText");
    saladText.classList.add("foodText");
    samsaText.classList.add("foodText");

    beshImages.classList.add("foodImages");
    kabobImages.classList.add("foodImages");
    kazanImages.classList.add("foodImages");
    lagmanImages.classList.add("foodImages");
    mastavaImages.classList.add("foodImages");
    narynImages.classList.add("foodImages");
    nonImages.classList.add("foodImages");
    plovImages.classList.add("foodImages");
    saladImages.classList.add("foodImages");
    samsaImages.classList.add("foodImages");
    container.appendChild(foodContainer);
    bigContainer.appendChild(container);
    return bigContainer
}

export { menu };