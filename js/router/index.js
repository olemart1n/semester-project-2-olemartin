import { renderWithBids } from "../feed/listings.js";
import { renderItem } from "../item/item.js";
import { renderProfile } from "../profile/profile.js";
import { renderUser } from "../user/index.js";
import { authCheck } from "../tools/authCheck.js";
import { load } from "../storage/index.js";

export const homeRouter = () => {
    if (load("location").includes("item")) {
        renderItem();
    } else if (load("location").includes("user") && authCheck()) {
        renderUser();
    } else if (load("location").includes("home")) {
        renderProfile();
    } else if (document.querySelector("#listingsFeed") && load("location").includes("semester")) {
        renderWithBids();
    }
};
