import { feedLayout } from "../home/feed/feedLayout.js";
import { apiRequest } from "../tools/fetch.js";
import { expandImg } from "../home/feed/expandImg.js";
import { nextBtn } from "./htmlElements.js";
const listingsContainer = document.querySelector("#listingsFeed");
const newBtn = document.querySelector("#filter-link-1");
const h2Header = document.querySelector("#listingHeader");

// parameters gets changed if user click nect page [not coded yet]
export const newest = async (start, end) => {
    let i = start;
    listingsContainer.innerHTML = "";
    h2Header.innerHTML = "Recently added items";
    await apiRequest("listings?_bids=true&sort=created&sortOrder=desc").then((data) => {
        const noneUndefinedImgs = data.filter((post) => {
            return post.media[0] !== undefined;
        });
        for (i; i < end; i++) {
            const element = noneUndefinedImgs[i];
            feedLayout(element);
            listingsContainer.insertAdjacentHTML("beforeend", feedLayout(element));
        }
    });
    expandImg();
    listingsContainer.insertAdjacentElement("afterend", nextBtn);
    let count = 0;
    nextBtn.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        count++;
        newest(14 * count, 28 * count);
    });
};
