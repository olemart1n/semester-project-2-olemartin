import { createElement } from "../tools/factory";
import { apiRequest } from "../tools/fetch";
import { endpoints, fetchOptions } from "../endpoints.mjs";
import { createEntry } from "../forms/entry";
import { itemForm } from "./entryInputs";
import {
    profileAvatar,
    profileName,
    headerSection,
    button,
    profileCredits,
    profileEmail,
    profileListings,
    subHeader1,
} from "./layoutElements";
const { account } = endpoints;
const { getWithJwt } = fetchOptions;
const main = document.querySelector("main");
const listingHeader = document.querySelector("#listingHeader");
const userContainer = document.querySelector("#itemContainer");

export const renderProfile = async () => {
    document.title = `Profile | AuctionHouse`;
    listingHeader.innerHTML = "Your details";
    userContainer.append(headerSection, profileListings);
    await apiRequest(account, getWithJwt).then((data) => {
        console.log(data);
        profileAvatar.src = data.avatar;
        profileName.innerHTML = data.name;
        profileEmail.innerHTML = data.email;
        profileCredits.innerHTML = "Your wallet " + data.credits + "$";
        data.listings.forEach((element) => {});
    });
    button.addEventListener("click", (e) => {
        itemForm.classList.toggle("hidden");
    });
    itemForm.addEventListener("submit", (e) => {
        e.preventDefault();
        createEntry(e);
    });
};
