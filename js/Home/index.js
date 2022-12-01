import { renderListings } from "./listings.js";
import { renderItem } from "./item/item.js";
import { renderProfile } from "./profile/profile.js";

export const homeRouter = () => {
    if (document.location.href.includes("item")) {
        renderItem();
    } else if (document.location.href.includes("home")) {
        renderProfile();
    } else if (document.querySelector("#listingsFeed")) {
        renderListings();
    }
    // renderListings();
};
