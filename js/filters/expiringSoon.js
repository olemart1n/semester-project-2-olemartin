import { feedLayout } from "../home/feed/feedLayout";
import { apiRequest } from "../tools/fetch";
import { expandImg } from "../home/feed/expandImg";
const listingsContainer = document.querySelector("#listingsFeed");
const newBtn = document.querySelector("#filter-link-1");
const h2Header = document.querySelector("#listingHeader");

// parameters gets changed if user click nect page
export const expiringSoon = async (start, end) => {
    let i = start;
    listingsContainer.innerHTML = "";
    h2Header.innerHTML = "Sorted by time left";
    await apiRequest("listings?_bids=true&sort=created&sortOrder=desc").then((data) => {
        const timeLeftArray = [];
        for (i = 0; i < end; i++) {
            const element = data[i];
            timeLeftArray.push(element.endsAt);
            // feedLayout(element);
            // listingsContainer.insertAdjacentHTML("beforeend", feedLayout(element));
        }
        console.log(timeLeftArray);
    });
    // expandImg();
};
