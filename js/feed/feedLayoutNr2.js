import { createElement } from "../tools/factory";

let counterSection = createElement("div", {
    class: "relative aspect-square lg:aspect-square flex flex-col items-center mb-2 shrink justify-between bg-almostWhite overflow-auto hover:overflow-scrollborder-5",
});
export const feedLayoutNr2 = (element) => {
    const i = createElement("i", {
        class: "absolute fa-sharp fa-solid fa-expand top-5 right-5 text-black fa-lg",
        id: element.id,
    });
    const p = createElement("p", {
        class: "absolute text-almostWhite p-1 bg-auctionBrown  left-0 bottom-20",
    });
    p.innerHTML = element.title;
    const img = createElement("img", {
        class: `itemImage object-top  object-cover h-2/3 shrink min-w-full img${element.id}`,
        src: element.media[0],
    });
    const div1 = createElement("div", {
        class: "flex text-auctionBlue min-w-full justify-around",
    });
    const counterDiv = createElement("div", {
        class: "grid grid-cols-3  m-0 p-0 w-1/2 counterBox${element.id}",
    });
    const a = createElement("a", {
        class: "bg-auctionGrey p-1 mb-5 rounded-sm text-almostWhite",
        href: `item?id=${element.id}`,
    });
    a.innerHTML = "view item";
    div1.append(counterDiv, a);
    counterSection.append(i, p, img, div1);
    return counterSection;
};

export const resetCounterSection = () => {
    counterSection.innerHTML = "";
};
