import {
    byTitleButton,
    byUserButton,
    byTagsButton,
    activeOrSold,
    itemResult,
    userResult,
} from "./htmlElements.js";
import { h2Header, searchContainer } from "../queryselectors.js";
export const renderTitles = (titleArray) => {
    byTitleButton.addEventListener("click", (e) => {
        e.currentTarget.classList.add("bg-auctionBlue");
        byTagsButton.classList.remove("bg-auctionBlue");
        byUserButton.classList.remove("bg-auctionBlue");
        searchContainer.innerHTML = "";
        setTimeout(() => {
            if (
                searchContainer.innerHTML.includes("-translate-x-1/2") ||
                searchContainer.innerHTML === ""
            ) {
                searchContainer.innerHTML =
                    "<p class='font-bold text-black mx-auto'>No results. <a href='/'>Go back</a></p>";
            }
        }, 1500);
        titleArray.forEach((element) => {
            searchContainer.insertAdjacentElement(
                "beforeend",
                itemResult(
                    `../item?id=${element.id}`,
                    element.media[0],
                    element.title,
                    activeOrSold(element.endsAt)
                )
            );
        });
    });
    byTitleButton.click();
    h2Header.innerHTML = "Search by title";
    // byTitleButton.addEventListener("onfocusout", () => {
    //     searchContainer.innerHTML = "";
    // });
};

export const renderTags = (tagsArray) => {
    byTagsButton.addEventListener("click", (e) => {
        h2Header.innerHTML = "Search by tags";
        e.currentTarget.classList.add("bg-auctionBlue");
        byTitleButton.classList.remove("bg-auctionBlue");
        byUserButton.classList.remove("bg-auctionBlue");
        searchContainer.innerHTML = "";
        tagsArray.forEach((element) => {
            searchContainer.insertAdjacentElement(
                "beforeend",
                itemResult(
                    `../item?id=${element.id}`,
                    element.media[0],
                    element.title,
                    activeOrSold(element.endsAt)
                )
            );
        });
    });
};

export const renderUsers = (userArray) => {
    byUserButton.addEventListener("click", (e) => {
        h2Header.innerHTML = "Search by user";
        e.currentTarget.classList.add("bg-auctionBlue");
        byTitleButton.classList.remove("bg-auctionBlue");
        byTagsButton.classList.remove("bg-auctionBlue");
        searchContainer.innerHTML = "";
        userArray.forEach((element) => {
            searchContainer.insertAdjacentElement(
                "beforeend",
                userResult(element.name, element.avatar, element.name)
            );
        });
    });
};
