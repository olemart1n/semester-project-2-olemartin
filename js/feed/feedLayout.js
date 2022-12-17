import { createElement } from "../tools/factory.js";
import { hourLeft } from "../tools/timeCalc/timeLeft.js";
export const feedLayout = (element) => {
    return `
  <div
    class="relative aspect-square lg:aspect-square flex flex-col items-center mb-2 shrink justify-between bg-almostWhite overflow-auto hover:overflow-scrollborder-5">
    <i class="absolute fa-sharp fa-solid fa-expand top-5 right-5 text-black fa-lg" id="${
        element.id
    }"></i>
    <p class="absolute text-almostWhite p-1 bg-auctionBrown  left-0 bottom-20">${element.title}</p>
    <img
      src="${element.media[0]}"
      alt="" class="itemImage object-top  object-cover h-2/3 shrink min-w-full img${element.id}">
     <div class="flex text-auctionBlue min-w-full justify-around">
         <div class="flex flex-col m-0 p-0">
         ${hourLeft(element.endsAt, element.bids)}
         </div>
       <button id=${
           element.id
       }" class="bg-auctionGrey p-1 mb-5 rounded-sm text-almostWhite font-bold item${
        element.id
    }">view item</button>
    </div>
  </div>
    `;
};

// export const feedLayout = (el) => {
//     const div = createElement("div", {
//         class: "relative aspect-square lg:aspect-square flex flex-col items-center mb-2 shrink justify-between bg-almostWhite overflow-auto hover:overflow-scrollborder-5",
//     });
//     const i = createElement("i", {
//         class: "absolute fa-sharp fa-solid fa-expand top-5 right-5 text-black fa-lg",
//         id: el.id,
//     });
//     const p = createElement("p", {
//         class: "absolute text-almostWhite p-1 bg-auctionBrown  left-0 bottom-20",
//     });
//     p.innerHTML = el.title;
//     const img = createElement("img", {
//         class: `itemImage object-top  object-cover h-2/3 shrink min-w-full img${el.id}`,
//         src: el.media[0],
//     });
//     const div1 = createElement("div", { class: "flex text-auctionBlue min-w-full justify-around" });
//     const div2 = createElement("div", { class: "flex flex-col m-0 p-0" });
//     div2.innerHTML = hourLeft(el.endsAt, el.bids);
//     const button = createElement("button", {
//         class: "bg-auctionGrey p-1 mb-5 rounded-sm text-almostWhite",
//         id: el.id,
//     });
//     button.innerHTML = "view item";
//     div1.append(div2, button);
//     div.append(i, p, img, div1);
// };
