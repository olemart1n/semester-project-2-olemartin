import { authedNav } from "./authedNav.js";
import { loginRequest } from "./loginRequest.js";
import { registerNewAccount } from "./regRequest.js";
import { authCheck } from "../tools/authCheck.js";
import { toggleNav, toggleSearch } from "../tools/UI/nav.js";

const currentUrl = document.location.href;
export const authenticationRouter = () => {
    if (currentUrl.includes("login")) {
        loginRequest();
    } else if (currentUrl.includes("register")) {
        registerNewAccount();
    } else if (authCheck() === true) {
        toggleNav();
        toggleSearch();
        authedNav();
    }
};
