//CAROUSELL SECTION

const topContainer = document.querySelector(".image-container");
const firstContainer = document.querySelector(".first-container");
const secondContainer = document.querySelector(".second-container");
const thirdContainer = document.querySelector(".third-container");
// addImages adds divs to the topContainer
const addImages = (jsondata) => {
    for (let i = 0; i < jsondata.length; i++) {
        if (i > 3) {
            break;
        }
        const div = document.createElement("div");
        firstContainer.appendChild(div);
        firstContainer.classList.add("current-slide");
        div.style.backgroundImage = `url(${jsondata[i].acf.image1})`;
        div.id = "carousell-image";
        div.addEventListener("click", (e) => {
            document.location = `/spesific.html?id=${jsondata[i].id}`;
        });
        const paragraph = document.createElement("p");
        paragraph.appendChild(document.createTextNode(jsondata[i].acf.title));
        div.appendChild(paragraph);
        const section = document.createElement("section");
        section.classList.add("hide");
        section.appendChild(document.createTextNode(jsondata[i].acf.frontText));
        div.appendChild(section);
    }
    for (let i = 4; i < jsondata.length; i++) {
        if (i > 7) {
            break;
        }
        const div = document.createElement("div");
        secondContainer.appendChild(div);
        div.style.backgroundImage = `url(${jsondata[i].acf.image1})`;
        div.id = "carousell-image";
        div.addEventListener("click", (e) => {
            document.location = `/spesific.html?id=${jsondata[i].id}`;
        });
        secondContainer.appendChild(div);
        const paragraph = document.createElement("p");
        paragraph.appendChild(document.createTextNode(jsondata[i].acf.title));
        div.appendChild(paragraph);
        const section = document.createElement("section");
        section.classList.add("hide");
        section.appendChild(document.createTextNode(jsondata[i].acf.frontText));
        div.appendChild(section);
    }
    for (let i = 8; i < jsondata.length; i++) {
        if (i > 12) {
            break;
        }
        const div = document.createElement("div");
        thirdContainer.appendChild(div);
        div.style.backgroundImage = `url(${jsondata[i].acf.image1})`;
        div.id = "carousell-image";
        div.addEventListener("click", (e) => {
            document.location = `/spesific.html?id=${jsondata[i].id}`;
        });
        const paragraph = document.createElement("p");
        paragraph.appendChild(document.createTextNode(jsondata[i].acf.title));
        div.appendChild(paragraph);
        const section = document.createElement("section");
        section.classList.add("hide");
        section.appendChild(document.createTextNode(jsondata[i].acf.frontText));
        div.appendChild(section);
    }
};

//-------buttons
const rightButton = document.querySelector(".fa-angle-right");
const leftButton = document.querySelector(".fa-angle-left");
leftButton.style.display = "none";

//-----adjusting width of each imagediv
const containerArray = Array.from(topContainer.children); //An array with the divs inside topContainer
const slideSize = containerArray[0].getBoundingClientRect();
const slideWidth = slideSize.width;
containerArray.forEach((i, index) => {
    i.style.left = slideWidth * index + "px";
});
//-------------------------------------------------------
//
//event listeners
const moveToSides = (topContainer, currentSlide, targetSlide) => {
    topContainer.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
    if (containerArray[2].classList.contains("current-slide")) {
        rightButton.style.display = "none";
    } else {
        rightButton.style.display = "block";
    }
    if (containerArray[0].classList.contains("current-slide")) {
        leftButton.style.display = "none";
    }
};

rightButton.addEventListener("click", (e) => {
    const currentSlide = topContainer.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    leftButton.style.display = "block";
    moveToSides(topContainer, currentSlide, nextSlide);
});

leftButton.addEventListener("click", (e) => {
    const currentSlide = topContainer.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;

    moveToSides(topContainer, currentSlide, prevSlide);
});
