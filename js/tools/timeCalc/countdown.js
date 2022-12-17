import { createElement } from "../factory.js";
import { timeGap } from "./definitions.js";
import { hour, day, min, sec } from "./definitions.js";

export const counterContainer = (element, endsAt) => {
    const counterSection = document.querySelector(".counterBox" + element);
    const hourDiv = createElement("div", { class: "time flex flex-col" });
    const minDiv = createElement("div", { class: "time flex flex-col" });
    const secDiv = createElement("div", { class: "time flex flex-col" });
    const hourH3 = createElement("h2", { class: "mx-auto text-auctionRed" });
    const minH3 = createElement("h2", { class: "mx-auto text-auctionRed" });
    const secH3 = createElement("h2", { class: "mx-auto text-auctionRed" });
    const hourText = createElement("small", { class: "mx-auto text-auctionRed" });
    const minText = createElement("small", { class: "mx-auto text-auctionRed" });
    const secText = createElement("small", { class: "mx-auto text-auctionRed" });
    hourText.innerHTML = "hours";
    minText.innerHTML = "minutes";
    secText.innerHTML = "seconds";
    hourDiv.append(hourH3, hourText);
    minDiv.append(minH3, minText);
    secDiv.append(secH3, secText);
    counterSection.append(hourDiv, minDiv, secDiv);
    // counterSection.append(minDiv);
    // counterSection.append(secDiv);
    setInterval(() => {
        secH3.innerHTML = Math.floor((timeGap(endsAt) % min) / sec);
        minH3.innerHTML = Math.floor((timeGap(endsAt) % hour) / min);
        hourH3.innerHTML = Math.floor((timeGap(endsAt) % day) / hour);
    }, 1000);

    return counterSection;
};
