import { filter } from "./sortBy";
export const filterRouter = () => {
    if (!window.location.href.includes("authentication")) {
        filter();
    }
};
