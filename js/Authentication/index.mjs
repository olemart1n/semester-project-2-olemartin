import { authedNav } from "./authedNav.mjs";
import { loginRequest } from "./loginRequest.mjs";
import { registerNewAccount } from "./regRequest.mjs";
import { authCheck } from "../tools/authCheck.mjs";
import { toggleNav, toggleSearch } from "../tools/UI/nav.mjs";

const currentUrl = document.location.href;
export const authenticationRouter = () => {
    if (currentUrl.includes("login")) {
        loginRequest();
    } else if (currentUrl.includes("register")) {
        registerNewAccount();
    } else if (authCheck()) {
        toggleNav();
        toggleSearch();
        authedNav();
    }
};
