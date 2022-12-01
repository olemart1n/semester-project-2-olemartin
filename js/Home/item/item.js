import { apiRequest } from "../../tools/fetch.js";
import { hourLeft } from "../../tools/timeCalc.js/timeLeft";
const itemContainer = document.querySelector("#itemContainer");
const listingFeed = document.querySelector("#listingsFeed");
const mainTag = document.querySelector("main");

export const renderItem = () => {
    listingFeed.innerHTML = "";
    document.title = `Item | AuctionHouse`;
    mainTag.classList.remove("bg-auctionBg");
    const queryString = document.location.search;
    const id = new URLSearchParams(queryString).get("id");
    const spesificItem = `listings/${id}?_seller=true&_bids=true`;

    apiRequest(spesificItem).then((data) => {
        itemContainer.insertAdjacentHTML(
            "beforeend",
            `
        <div
        class="relative justify-between bg-almostWhite">
        <i class="absolute fa-sharp fa-solid fa-expand top-5 right-5 text-black  fa-xl"></i>
        <h2 class=" text-almostWhite p-2 bg-auctionBrown">${data.title}</h2>
        <img 
          src="${data.media[0]}"
          alt="" class="itemImage object-top  object-cover h-2/3 shrink min-w-full img${data.id}">
        <div class="flex text-auctionBlue min-w-full justify-around">
        <div class="flex flex-col m-0 p-0">
        ${hourLeft(data.endsAt, data.bids)}
        </div>
        </div>
      </div>
        `
        );
    });
};
