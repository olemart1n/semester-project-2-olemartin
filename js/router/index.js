import { loginRequest } from "../Authentication/loginRequest.mjs";
import { registerNewAccount } from "../Authentication/regRequest.mjs";
import { authCheck } from "../tools/authCheck.mjs";
import { toggleNav, toggleSearch } from "../tools/UI/nav.mjs";
import { authedFuntions } from "../home/index.mjs";
const currentUrl = document.location.href;
export const authenticationRouter = () => {
    if (currentUrl.includes("login")) {
        loginRequest();
    } else if (currentUrl.includes("register")) {
        registerNewAccount();
    } else if (authCheck()) {
        toggleNav();
        toggleSearch();
        authedFuntions();
    }
};
