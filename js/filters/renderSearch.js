import {
    byTitleButton,
    byUserButton,
    byTagsButton,
    activeOrSold,
    itemResult,
    userResult,
} from "./htmlElements.js";
const resultsContainer = document.querySelector("#itemContainer");
const header = document.querySelector("#listingHeader");

export const renderTitles = (titleArray) => {
    byTitleButton.addEventListener("click", (e) => {
        e.currentTarget.classList.add("bg-auctionBlue");
        byTagsButton.classList.remove("bg-auctionBlue");
        byUserButton.classList.remove("bg-auctionBlue");
        resultsContainer.innerHTML = "";
        setTimeout(() => {
            if (
                resultsContainer.innerHTML.includes("-translate-x-1/2") ||
                resultsContainer.innerHTML === ""
            ) {
                resultsContainer.innerHTML =
                    "<p class='font-bold text-black mx-auto'>No results. <a href='/'>Go back</a></p>";
            }
        }, 1500);
        titleArray.forEach((element) => {
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
    header.innerHTML = "Search by title";
};

export const renderTags = (tagsArray) => {
    byTagsButton.addEventListener("click", (e) => {
        header.innerHTML = "Search by tags";
        e.currentTarget.classList.add("bg-auctionBlue");
        byTitleButton.classList.remove("bg-auctionBlue");
        byUserButton.classList.remove("bg-auctionBlue");
        resultsContainer.innerHTML = "";
        tagsArray.forEach((element) => {
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
        header.innerHTML = "Search by user";
        e.currentTarget.classList.add("bg-auctionBlue");
        byTitleButton.classList.remove("bg-auctionBlue");
        byTagsButton.classList.remove("bg-auctionBlue");
        resultsContainer.innerHTML = "";
        userArray.forEach((element) => {
            resultsContainer.insertAdjacentElement(
                "beforeend",
                userResult(element.name, element.avatar, element.name)
            );
        });
    });
};
