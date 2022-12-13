import { newBtn, expireSoonBtn, p, nav, nextBtn } from "./htmlElements";
import { searchFocusOut } from "./serchFocusOut";
import { searchFocus } from "./searchFocus";
import { newest } from "./newest";
import { expiringSoon } from "./expiringSoon";
import { search } from "./search";
const filterSection = document.querySelector("#filters");

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
