import {
    navLinkOne,
    itemContainer,
    profileContainer,
    listingsFeed,
    h2Header,
    navWithBar,
    ghostButton,
    filterSection,
    newListingsFeed,
    expireSoonFeed,
    searchContainer,
    searchFilterSection,
    userContainer,
} from "../queryselectors";
import { renderLoginPage } from "../authentication/renderLoginPage";
import { loginRequest } from "../authentication/loginRequest.js";
import { load, save } from "../storage";
import { profilePage } from "./profilePage";
import { newNewBtn, newExpireSoonBtn } from "../filters";

export const loginProfileBtn = () => {
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
            navWithBar.insertAdjacentElement("afterbegin", ghostButton);
            ghostButton.classList.remove("hidden");
            profileContainer.classList.remove("hidden", "sm:hidden", "md:hidden", "lg:hidden");
            listingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
            itemContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
            newListingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
            expireSoonFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
            searchContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
            searchFilterSection.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
            userContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
            save("ghostButton", "activated");
        });
    }
};

export const profileButton = () => {
    ghostButton.addEventListener("click", () => {
        profileContainer.classList.remove("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        listingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        itemContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        newListingsFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        expireSoonFeed.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        searchFilterSection.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        userContainer.classList.add("hidden", "sm:hidden", "md:hidden", "lg:hidden");
        newNewBtn.classList.remove("bg-auctionBlue");
        newExpireSoonBtn.classList.remove("bg-auctionBlue");
    });
};
