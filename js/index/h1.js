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
import { newNewBtn, newExpireSoonBtn } from "../filters";
export const homeLink = () => {
    h1.addEventListener("click", () => {
        document.location.reload();
    });
};
