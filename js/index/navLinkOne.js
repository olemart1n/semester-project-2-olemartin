import {
    navLinkOne,
    itemContainer,
    profileContainer,
    listingsFeed,
    h2Header,
    navWithBar,
    ghostButton,
} from "../queryselectors";
import { renderLoginPage } from "../authentication/renderLoginPage";
import { loginRequest } from "../authentication/loginRequest.js";
import { load, save } from "../storage";
import { profilePage } from "./profilePage";
import { Container } from "postcss";

// const ghostButton = navLinkOne.cloneNode(true);
// ghostButton.id = "ghostButton";
// ghostButton.innerHTML = "Profile";

export const loginProfileBtn = () => {
    if (load("ghostButton") === "activated") {
        navLinkOne.remove();
        navWithBar.insertAdjacentElement("afterbegin", ghostButton);
    }
    if (load("authed") === "false" || load("authed") === null) {
        navLinkOne.addEventListener("click", () => {
            // resetFilterButtons();
            itemContainer.innerHTML = "";
            listingsFeed.innerHTML = "";
            h2Header.innerHTML = "LOGIN";
            renderLoginPage();
            loginRequest();
        });
    } else {
        navLinkOne.addEventListener("click", () => {
            profilePage();
            save("page", "profile");
            navLinkOne.remove();
            // navWithBar.insertAdjacentElement("afterbegin", ghostButton);
            ghostButton.classList.remove("hidden");
            save("ghostButton", "activated");
        });
    }
};

export const profileButton = () => {
    // profileContainer.classList.add("hidden");
    ghostButton.addEventListener("click", () => {
        profileContainer.classList.remove("hidden");
        console.log("hello");
    });
};
