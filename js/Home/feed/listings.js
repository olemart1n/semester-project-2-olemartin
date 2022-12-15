import { apiRequest } from "../../tools/fetch.js";
import { expandImg } from "./expandImg.js";
import { feedLayout } from "./feedLayout.js";

const listingsContainer = document.querySelector("#listingsFeed");

export const renderWithBids = async (req) => {
    await apiRequest("listings?_bids=true&sort=created&sortOrder=desc").then((data) => {
        const withBids = data.filter((items) => {
            return items.bids.length > 0;
        });
        for (let i = 0; i < withBids.length; i++) {
            const element = withBids[i];
            if (i === 10) {
                break;
            }
            listingsContainer.insertAdjacentHTML("beforeend", feedLayout(element));
        }
    });
    expandImg();
};
