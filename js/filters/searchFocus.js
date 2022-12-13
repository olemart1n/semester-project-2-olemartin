import { nav, byTagsButton, byTitleButton, byUserButton } from "./htmlElements";
const listingsFeed = document.querySelector("#listingsFeed");
const resultsContainer = document.querySelector("#itemContainer");
const searchForm = document.querySelector("#searchForm");
const navContainer = document.querySelector("#filters");
export const searchFocus = () => {
    searchForm.addEventListener("input", () => {
        listingsFeed.innerHTML = "";
        resultsContainer.innerHTML = `<div class="h-screen flex items-start place-content-center">
            <div class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-auctionGreen via-logoBg to-auctionBlue ">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2"></div>
            </div>
            </div>`;
        navContainer.innerHTML = "";
        navContainer.append(byTitleButton, byTagsButton, byUserButton);
        navContainer.classList.remove("md:columns-2", "md:block");
        navContainer.classList.add("md:flex", "place-content-center");
    });
};
