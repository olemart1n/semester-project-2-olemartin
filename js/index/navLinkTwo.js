import {
    navLinkTwo,
    itemContainer,
    listingsFeed,
    h2Header,
    profileContainer,
} from "../queryselectors";
import { renderRegPage } from "../authentication/renderRegPage";
import { resetFilterButtons } from "../filters/htmlElements";

export const registerLogoutBtn = () => {
    navLinkTwo.addEventListener("click", () => {
        // resetFilterButtons();
        itemContainer.innerHTML = "";
        listingsFeed.innerHTML = "";
        profileContainer.innerHTML = "";
        h2Header.innerHTML = "Create Account";
        renderRegPage();
    });
};
