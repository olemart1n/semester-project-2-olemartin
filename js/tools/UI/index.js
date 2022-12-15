import { toggleNav, toggleSearch } from "./nav.js";
export const navRouter = () => {
    if (document.querySelector("#listingsFeed")) {
        toggleNav();
        toggleSearch();
    }
};
