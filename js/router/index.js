import { renderWithBids } from "../home/feed/listings.js";
import { renderItem } from "../item/item.js";
import { renderProfile } from "../profile/profile.js";
import { renderUser } from "../user/index.js";
import { authCheck } from "../tools/authCheck.js";

export const homeRouter = () => {
    if (document.location.href.includes("item")) {
        renderItem();
    } else if (document.location.href.includes("user") && authCheck()) {
        renderUser();
    } else if (document.location.href.includes("home")) {
        renderProfile();
    } else if (document.querySelector("#listingsFeed")) {
        renderWithBids();
    }
};
