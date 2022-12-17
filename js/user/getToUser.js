import { renderUser } from ".";
import {
    userContainer,
    itemContainer,
    profileContainer,
    searchContainer,
    listingsFeed,
    expireSoonFeed,
    newListingsFeed,
    searchFilterSection,
} from "../queryselectors";

export const getToUser = (name, namex) => {
    const user = document.querySelector(".user" + name);
    user.addEventListener("click", () => {
        renderUser(namex);
        itemContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        userContainer.classList.remove("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        profileContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        listingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        expireSoonFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        newListingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchFilterSection.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
    });
};
