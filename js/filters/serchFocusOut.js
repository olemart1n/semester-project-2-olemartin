import { nav, byTagsButton, byTitleButton, byUserButton } from "./htmlElements";
const searchForm = document.querySelector("#searchForm");
const navContainer = document.querySelector("#filters");
export const searchFocusOut = () => {
    searchForm.addEventListener("focusout", () => {
        console.log("focus out event triggered");
    });
};
