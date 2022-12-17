import { byTagsButton, byTitleButton, byUserButton } from "./htmlElements.js";
import { newNewBtn, newExpireSoonBtn } from "./index.js";
import {
    searchForm,
    filterSection,
    itemContainer,
    listingsFeed,
    profileContainer,
    expireSoonFeed,
    newListingsFeed,
    searchFilterSection,
    searchContainer,
    userContainer,
} from "../queryselectors";

export const searchFocus = () => {
    searchForm.addEventListener("input", () => {
        listingsFeed.innerHTML = "";
        searchContainer.innerHTML = `<div class="h-screen flex items-start place-content-center">
            <div class="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-auctionGreen via-logoBg to-auctionBlue ">
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2"></div>
            </div>
            </div>`;
        searchFilterSection.append(byTitleButton, byTagsButton, byUserButton);
        searchFilterSection.classList.remove("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        newNewBtn.classList.remove("bg-auctionBlue");
        newExpireSoonBtn.classList.remove("bg-auctionBlue");

        profileContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        expireSoonFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        newListingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        listingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        itemContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        userContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchContainer.classList.remove("hidden", "sm:hidden", "md:hidden", "lg:hidden");
    });
};
