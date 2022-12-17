import { newBtn, expireSoonBtn, nav, nextBtn, twoButtonsDiv } from "./htmlElements.js";
import { searchFocus } from "./searchFocus.js";
import { newest } from "./newest.js";
import { expiringSoon } from "./expiringSoon.js";
import { search } from "./search.js";
import {
    filterSection,
    listingsFeed,
    expireSoonFeed,
    profileContainer,
    newListingsFeed,
    searchContainer,
    searchFilterSection,
    userContainer,
} from "../queryselectors.js";

export const newExpireSoonBtn = expireSoonBtn.cloneNode(true);
newExpireSoonBtn.innerHTML = "Expiring today";
newExpireSoonBtn.id = "newExB";
//----------------------------------------------------
export const newNewBtn = newBtn.cloneNode(true);
newNewBtn.innerHTML = "Newest";
newNewBtn.id = "newNewBtn";

export const filter = () => {
    filterSection.insertAdjacentElement("beforeend", nav);
    newBtn.addEventListener("click", (e) => {
        e.currentTarget.classList.add("bg-auctionBlue");
        listingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        newest(0, 14);
        expireSoonBtn.classList.remove("bg-auctionBlue");
        newExpireSoonBtn.classList.remove("bg-auctionBlue"); // the coming button
        newBtn.remove();
        twoButtonsDiv.insertAdjacentElement("beforeend", newNewBtn);
        newNewBtn.classList.add("bg-auctionBlue");
        profileContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        expireSoonFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        newListingsFeed.classList.remove("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchFilterSection.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        userContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
    });
    expireSoonBtn.addEventListener("click", (e) => {
        listingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        expiringSoon(0, 14);
        newBtn.classList.remove("bg-auctionBlue");
        newNewBtn.classList.remove("bg-auctionBlue");
        expireSoonFeed.classList.remove("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        expireSoonBtn.remove();
        twoButtonsDiv.insertAdjacentElement("afterbegin", newExpireSoonBtn);
        newExpireSoonBtn.classList.add("bg-auctionBlue");
        newListingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchFilterSection.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        userContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
    });
    searchFocus();
    search();
    // searchFocusOut();
};

export const loggedInFilter = () => {
    newExpireSoonBtn.addEventListener("click", (e) => {
        newNewBtn.classList.remove("bg-auctionBlue");
        e.currentTarget.classList.add("bg-auctionBlue");
        listingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        expireSoonFeed.classList.remove("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        profileContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        newListingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchFilterSection.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        userContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
    });
    newNewBtn.addEventListener("click", (e) => {
        e.currentTarget.classList.add("bg-auctionBlue");
        expireSoonFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        e.currentTarget.classList.add("bg-auction");
        listingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        newExpireSoonBtn.classList.remove("bg-auctionBlue");
        expireSoonFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        profileContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        newListingsFeed.classList.remove("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchFilterSection.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        userContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
    });
};
