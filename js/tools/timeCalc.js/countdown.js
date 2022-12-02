import { createElement } from "../factory";
import { timeGap } from "./definitions";
import { hour, day, min, sec } from "./definitions";

export const oneCunterBox = (element, endsAt) => {
    const counterSection = document.querySelector(".counterBox" + element);
    const hourDiv = createElement("div", { class: "time flex flex-col" });
    const minDiv = createElement("div", { class: "time flex flex-col" });
    const secDiv = createElement("div", { class: "time flex flex-col" });
    const hourH3 = createElement("h2", { class: "mx-auto" });
    const minH3 = createElement("h2", { class: "mx-auto" });
    const secH3 = createElement("h2", { class: "mx-auto" });
    const hourText = createElement("small", { class: "mx-auto" });
    const minText = createElement("small", { class: "mx-auto" });
    const secText = createElement("small", { class: "mx-auto" });
    hourText.innerHTML = "hours";
    minText.innerHTML = "minutes";
    secText.innerHTML = "seconds";
    hourDiv.append(hourH3);
    hourDiv.append(hourText);
    minDiv.append(minH3);
    minDiv.append(minText);
    secDiv.append(secH3);
    secDiv.append(secText);
    counterSection.append(hourDiv);
    counterSection.append(minDiv);
    counterSection.append(secDiv);
    setInterval(() => {
        secH3.innerHTML = Math.floor((timeGap(endsAt) % min) / sec);
        minH3.innerHTML = Math.floor((timeGap(endsAt) % hour) / min);
        hourH3.innerHTML = Math.floor((timeGap(endsAt) % day) / hour);
    }, 1000);
};
