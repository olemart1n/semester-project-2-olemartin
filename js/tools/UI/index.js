import { toggleNav, toggleSearch } from "./nav.mjs";
export const navRouter = () => {
    if (document.querySelector("#listingsFeed")) {
        toggleNav();
        toggleSearch();
    }
};
