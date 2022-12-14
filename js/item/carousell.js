import { createElement } from "../tools/factory.js";

export const carousell = (mediaArr, slideContainer, sifferContainer) => {
    mediaArr.forEach((element, index) => {
        const sifferBox = createElement("button", {
            class: "border bg-auctionBlue aspect-square flex h-7 mx-3 place-content-center items-center border-2 border-almostWhite drop-shadow-md font-bold",
        });
        sifferBox.innerHTML = index + 1;
        sifferContainer.append(sifferBox);
        sifferBox.addEventListener("click", (e) => {
            document.querySelector(".bg-auctionBlue").classList.add("bg-slate-400");
            document.querySelector(".bg-auctionBlue").classList.remove("bg-auctionBlue");
            e.currentTarget.classList.remove("bg-slate-400");
            e.currentTarget.classList.add("bg-auctionBlue");
            //
            document.querySelector(".currentImg").classList.add("hidden");
            document.querySelector(".currentImg").classList.remove("currentImg");
            document.getElementById(e.currentTarget.innerHTML).classList.remove("hidden");
            document.getElementById(e.currentTarget.innerHTML).classList.add("currentImg");
        });
        //
        const anImg = createElement("img", {
            class: " object-top  object-cover h-2/3 shrink w-4/5 mx-auto currentImg aspect-square drop-shadow-md hidden",
            id: index + 1,
        });
        if (index === 0) {
            anImg.classList.remove("hidden");
        }
        anImg.src = element;
        slideContainer.append(anImg);
        if (index !== 0) {
            sifferBox.classList.add("bg-slate-400");
        }
    });
};
