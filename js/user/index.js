import { apiRequest } from "../tools/fetch.js";
import { fetchOptions } from "../endpoints.js";
import {
    headerSection,
    userAvatar,
    userName,
    subHeader1,
    subHeader2,
    itemConainer,
    allItemsContinaer,
    activeOrSold,
    allBidsContainer,
    bidContainer,
} from "./layoutElements.js";
import { backArrow } from "../tools/UI/backArrow.js";
import { endOfQuery } from "../tools/query/endOfQuery.js";

const userContainer = document.querySelector("#itemContainer");
const h2Header = document.querySelector("#listingHeader");
const { getWithJwt } = fetchOptions;
export const renderUser = () => {
    backArrow(h2Header);
    const listingsFetch = `profiles/${endOfQuery()}?_listings=true `;
    const bidsFetch = `profiles/${endOfQuery()}/bids?_listings=true`;
    userContainer.append(headerSection, allItemsContinaer, allBidsContainer);
    apiRequest(listingsFetch, getWithJwt).then((data) => {
        userAvatar.src = data.avatar;
        userName.innerHTML = data.name;
        subHeader1.innerHTML = data.name + "'s listings";
        data.listings.forEach((element) => {
            allItemsContinaer.insertAdjacentElement(
                "beforeend",
                itemConainer(
                    `/semester-project-2-olemartin/item?id=${element.id}`,
                    element.media[0],
                    element.title,
                    activeOrSold(element.endsAt)
                )
            );
        });
    });
    apiRequest(bidsFetch, getWithJwt).then((data) => {
        console.log(data);
        subHeader2.innerHTML = data[0].bidderName + " made bid's on these listings";
        data.forEach((element) => {
            allBidsContainer.insertAdjacentElement(
                "beforeend",
                bidContainer(
                    `/semester-project-2-olemartin/item?id=${element.listing.id}`,
                    element.listing.title,
                    activeOrSold(element.listing.endsAt)
                )
            );
        });
    });
};

//flex flex-col md:w-5/6 w-full m-auto p-3
