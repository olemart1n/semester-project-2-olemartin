import { navLinkOne, navLinkTwo } from "../queryselectors";
import { save } from "../storage";

export const authedNav = () => {
    navLinkOne.textContent = "Profile"; // PROFILE BUTTON
    navLinkTwo.addEventListener("click", () => {
        localStorage.clear();
        document.location.reload();
    });
    navLinkTwo.textContent = "Logout";
    document.title = "Feed | AuctionHouse";
};
