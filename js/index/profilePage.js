import { renderProfile } from "../profile/profile";
import { itemContainer, h2Header, listingsFeed } from "../queryselectors";
import { load } from "../storage";
export const profilePage = () => {
    listingsFeed.innerHTML = "";
    itemContainer.innerHTML = "";
    renderProfile();
};
