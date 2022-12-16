import { newBtn, expireSoonBtn, nav, nextBtn } from "./htmlElements.js";
import { searchFocus } from "./searchFocus.js";
import { newest } from "./newest.js";
import { expiringSoon } from "./expiringSoon.js";
import { search } from "./search.js";
import { filterSection } from "../queryselectors.js";

export const filter = () => {
    filterSection.insertAdjacentElement("beforeend", nav);
    newBtn.addEventListener("click", (e) => {
        if (document.querySelector("#itemContainer")) {
            document.querySelector("#itemContainer").remove();
        }
        newest(0, 14);
        e.currentTarget.classList.add("bg-auctionBlue");
        expireSoonBtn.classList.remove("bg-auctionBlue");
    });
    expireSoonBtn.addEventListener("click", (e) => {
        nextBtn.remove();
        if (document.querySelector("#itemContainer")) {
            document.querySelector("#itemContainer").remove();
        }
        expiringSoon(0, 14);
        e.currentTarget.classList.add("bg-auctionBlue");
        newBtn.classList.remove("bg-auctionBlue");
    });
    searchFocus();
    search();
    // searchFocusOut();
};
