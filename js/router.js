import { renderWithBids } from "./feed/listings.js";
import { authCheck } from "./tools/authCheck.js";
import { authedNav } from "./authentication/authedNav.js";
import { load } from "./storage/load.js";

export const router = () => {
    if (load("authed") === null) {
        renderWithBids();
    } else if (authCheck()) {
        renderWithBids();
        authedNav();
    }
};
