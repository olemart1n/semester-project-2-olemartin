import { createElement } from "../tools/factory";

export const newBtn = createElement("button", {
    class: "text-almostWhite bg-logoBg w-1/4  rounded-none px-1 border-none mx-auto w-30 enabled:hover:outline-none",
    id: "filter-link-1",
});
newBtn.innerHTML = "Newest";
export const expireSoonBtn = createElement("button", {
    class: "text-almostWhite bg-logoBg w-1/4  rounded-none px-1 border-none mx-auto w-30 enabled:hover:outline-none",
    id: "filter-link-2",
});
expireSoonBtn.innerHTML = "Expiring today";
export const nav = createElement("nav", { class: "" });
export const div1 = createElement("div", { class: "flex self-center" });
export const p = createElement("p", { class: "text-logoBg m-auto" });
p.innerHTML = "sort by";
export const div2 = createElement("div", { class: "flex flex-col md:flex-row md:pb-0 pb-0 gap-2" });
div1.append(p);
div2.append(expireSoonBtn);
div2.append(newBtn);
nav.append(div1);
nav.append(div2);

export const nextBtn = createElement("button", {
    class: "px-5 border border-1 text-logoBg py-2 mx-auto block",
});
nextBtn.innerHTML = "Next";
