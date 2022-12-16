import { filter } from "../filters";
import {
    h1,
    filterSection,
    itemContainer,
    h2Header,
    listingsFeed,
    profileContainer,
} from "../queryselectors.js";
import { renderWithBids } from "../feed/listings.js";
import { load, save } from "../storage";
export const homeLink = () => {
    h1.addEventListener("click", () => {
        save("page", "index");
        profileContainer.classList.add("hidden");
        // profileContainer.remove();
        listingsFeed.innerHTML = "";
        const appendedEls = filterSection.children;
        const btnArr = [...appendedEls];
        btnArr.forEach((element) => {
            element.remove();
        });
        filterSection.classList.add("md:columns-2", "md:block");
        filterSection.classList.remove("md:flex", "place-content-center");
        filterSection.innerHTML = "";
        itemContainer.innerHTML = "";
        h2Header.innerHTML = "Popular Listings";
        renderWithBids();
        filter();
    });
};
