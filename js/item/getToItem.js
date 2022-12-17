import {
    userContainer,
    profileContainer,
    searchContainer,
    searchFilterSection,
    listingsFeed,
    expireSoonFeed,
    newListingsFeed,
    itemContainer,
} from "../queryselectors";
import { renderItem } from "./item";
export const getToItem = (id) => {
    const item = document.querySelector(".item" + id);
    item.addEventListener("click", () => {
        renderItem(id);
        itemContainer.classList.remove("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        userContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        profileContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        listingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        expireSoonFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        newListingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchFilterSection.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
    });
};
