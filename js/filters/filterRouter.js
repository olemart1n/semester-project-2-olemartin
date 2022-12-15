import { filter } from "./sortBy.js";
export const filterRouter = () => {
    if (!window.location.href.includes("authentication")) {
        filter();
    }
};
