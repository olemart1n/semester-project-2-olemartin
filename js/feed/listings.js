import { apiRequest } from "../tools/fetch.js";
import { expandImg } from "./expandImg.js";
import { feedLayout } from "./feedLayout.js";
import { listingsFeed, userContainer } from "../queryselectors.js";
import { getToItem } from "../item/getToItem.js";

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
            listingsFeed.insertAdjacentHTML("beforeend", feedLayout(element));
            getToItem(element.id);
        }
    });
    expandImg();
};
