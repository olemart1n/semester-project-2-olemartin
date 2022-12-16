import { h1, navLinkOne } from "../queryselectors.js";
import { load } from "../storage/load.js";

export const avoidDOMbubbling = () => {
    if (load("page") === "profile") {
        navLinkOne.setAttribute("disabled", "disabled");
    }
};
