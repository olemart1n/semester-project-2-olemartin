import {
    byTitleButton,
    byUserButton,
    byTagsButton,
    activeOrSold,
    itemResult,
    userResult,
} from "./htmlElements.js";
const resultsContainer = document.querySelector("#itemContainer");

export const renderTitles = (titleArray) => {
    byTitleButton.addEventListener("click", (e) => {
        e.currentTarget.classList.add("bg-auctionBlue");
        byTagsButton.classList.remove("bg-auctionBlue");
        byUserButton.classList.remove("bg-auctionBlue");
        titleArray.forEach((element) => {
            resultsContainer.innerHTML = "";
            resultsContainer.insertAdjacentElement(
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
};

export const renderTags = (tagsArray) => {
    byTagsButton.addEventListener("click", (e) => {
        e.currentTarget.classList.add("bg-auctionBlue");
        byTitleButton.classList.remove("bg-auctionBlue");
        byUserButton.classList.remove("bg-auctionBlue");
        tagsArray.forEach((element) => {
            resultsContainer.innerHTML = "";
            resultsContainer.insertAdjacentElement(
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
        e.currentTarget.classList.add("bg-auctionBlue");
        byTitleButton.classList.remove("bg-auctionBlue");
        byTagsButton.classList.remove("bg-auctionBlue");
        userArray.forEach((element) => {
            resultsContainer.innerHTML = "";
            resultsContainer.insertAdjacentElement(
                "beforeend",
                userResult(element.name, element.avatar, element.name)
            );
        });
    });
};
