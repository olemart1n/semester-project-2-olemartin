import { feedLayout } from "../feed/feedLayout.js";
import { apiRequest } from "../tools/fetch.js";
import { expandImg } from "../feed/expandImg.js";
import { nextBtn } from "./htmlElements.js";
import { listingsFeed, h2Header } from "../queryselectors.js";
const newBtn = document.querySelector("#filter-link-1");

// parameters gets changed if user click nect page [not coded yet]
export const newest = async (start, end) => {
    let i = start;
    listingsFeed.innerHTML = "";
    h2Header.innerHTML = "Recently added items";
    await apiRequest("listings?_bids=true&sort=created&sortOrder=desc").then((data) => {
        const noneUndefinedImgs = data.filter((post) => {
            return post.media[0] !== undefined;
        });
        for (i; i < end; i++) {
            const element = noneUndefinedImgs[i];
            feedLayout(element);
            listingsFeed.insertAdjacentHTML("beforeend", feedLayout(element));
        }
    });
    expandImg();
    listingsFeed.insertAdjacentElement("afterend", nextBtn);
    let count = 0;
    nextBtn.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        count++;
        newest(14 * count, 28 * count);
    });
};
