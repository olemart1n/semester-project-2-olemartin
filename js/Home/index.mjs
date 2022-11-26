import { renderListings } from "./listings.mjs";
import { renderItem } from "./item/item.mjs";

export const homeRouter = () => {
    if (document.location.href.includes("item")) {
        renderItem();
    } else {
        renderListings();
    }
    // renderListings();
};
