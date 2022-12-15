import { apiRequest } from "../tools/fetch.js";

export const withBids = async () => {
    await apiRequest("listings?_bids=true&sort=created&sortOrder=desc").then((data) => {
        const withBids = data.filter((items) => {
            return items.bids.length > 0;
        });
        for (let i = 0; i < withBids.length; i++) {
            const element = withBids[i];
            if (i === 10) {
                break;
            }
            return element;
        }
        return element;
    });
    return element;
};
