import { renderListings } from "./listings.mjs";
import { authedNav } from "./authedNav.mjs";

export const authedFuntions = () => {
    renderListings();
    authedNav();
};
