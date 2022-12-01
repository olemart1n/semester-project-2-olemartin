import { filter } from "./sortBy";

export const filterRouter = () => {
    if (document.querySelector("#listingsFeed")) {
        filter();
    }
};
