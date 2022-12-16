import { renderWithBids } from "./feed/listings.js";
import { renderItem } from "./item/item.js";
import { renderUser } from "./user/index.js";
import { authCheck } from "./tools/authCheck.js";
import { authedNav } from "./authentication/authedNav.js";
import { load } from "./storage/load.js";

export const router = () => {
    if (load("authed") === null) {
        renderWithBids();
    } else if (load("page") === "user" && authCheck()) {
        renderUser();
    } else if (authCheck()) {
        renderWithBids();
        authedNav();
    } else if (load("page") === "item") {
        renderItem();
    }
};
