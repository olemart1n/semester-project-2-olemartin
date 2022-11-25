import { apiRequest } from "../tools/fetch.js";
import { base } from "../endpoints.mjs";
import { hourLeft } from "../tools/timeCalc.js/timeLeft.js";

const listingsContainer = document.querySelector("#listingsFeed");

export const renderListings = () => {
    apiRequest("listings?sort=created&sortOrder=desc").then((data) => {
        data.forEach((element) => {
            listingsContainer.insertAdjacentHTML(
                "beforeend",
                `
            <div
            class="relative aspect-square lg:aspect-square flex flex-col items-center mb-2 shrink justify-between bg-almostWhite overflow-auto hover:overflow-scrollborder-5">
            <i class="absolute fa-sharp fa-solid fa-expand top-5 right-5 text-black  fa-xl"></i>
            <img
              src="${element.media[0]}"
              alt="" class="object-top  object-cover h-2/3 shrink min-w-full">
            <div class="flex text-auctionBlue min-w-full justify-around">
            <div><span>${hourLeft(element.endsAt)}</span></div>
            <a href="${base}listings/${
                    element.id
                }" class="bg-auctionGrey p-1 mb-5 rounded-sm text-almostWhite">view item</a>
            </div>
          </div>
            `
            );
        });
    });
};
