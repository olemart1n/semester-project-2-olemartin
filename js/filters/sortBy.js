import { createElement } from "../tools/factory";

import { newest } from "./newest";
import { expiringSoon } from "./expiringSoon";
const filterSection = document.querySelector("#filters");

export const filter = () => {
    filterSection.insertAdjacentElement("beforeend", nav);
    newBtn.addEventListener("click", (e) => {
        newest(0, 14);
        e.currentTarget.classList.add("bg-auctionBlue");
        expireSoonBtn.classList.remove("bg-auctionBlue");
    });
    expireSoonBtn.addEventListener("click", (e) => {
        expiringSoon(0, 14);
        e.currentTarget.classList.add("bg-auctionBlue");
        newBtn.classList.remove("bg-auctionBlue");
    });
};

const newBtn = createElement("button", {
    class: "text-almostWhite bg-logoBg w-1/4  rounded-none px-1 border-none mx-auto w-30 enabled:hover:outline-none",
    id: "filter-link-1",
});
newBtn.innerHTML = "Newest";
const expireSoonBtn = createElement("button", {
    class: "text-almostWhite bg-logoBg w-1/4  rounded-none px-1 border-none mx-auto w-30 enabled:hover:outline-none",
    id: "filter-link-2",
});
expireSoonBtn.innerHTML = "Expiring today";
const nav = createElement("nav", {});
const div1 = createElement("div", { class: "flex" });
const p = createElement("p", { class: "text-logoBg mx-auto" });
p.innerHTML = "sort by";
const div2 = createElement("div", { class: "flex flex-col md:flex-row md:pb-0 pb-0 gap-2" });
div1.append(p);
div2.append(expireSoonBtn);
div2.append(newBtn);
nav.append(div1);
nav.append(div2);
