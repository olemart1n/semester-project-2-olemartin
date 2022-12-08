import { createElement } from "../tools/factory";
import { apiRequest } from "../tools/fetch";
import { endpoints, fetchOptions } from "../endpoints.mjs";
import { createEntry } from "../forms/entry";
import { itemForm } from "./entryInputs";
import { refresh } from "./clickEvents";
import {
    profileAvatar,
    profileName,
    headerSection,
    button,
    profileCredits,
    profileEmail,
    profileListings,
    activeOrSold,
    listingContainer,
    activeBtn,
    allBtn,
    checkActive,
} from "./layoutElements";
const { account } = endpoints;
const { getWithJwt } = fetchOptions;
const main = document.querySelector("main");
const listingHeader = document.querySelector("#listingHeader");
const userContainer = document.querySelector("#itemContainer");
const subUserContainer = createElement("div", { class: "" });
//
export const updateModal = createElement("div", { class: "w-full aspect-square hidden" });
export const itemFormClone = itemForm.cloneNode(true);
//
export const renderProfile = async () => {
    document.body.append(updateModal);
    userContainer.classList.add("min-h-screen");
    document.title = `Profile | AuctionHouse`;
    listingHeader.innerHTML = "Your details";
    //
    itemFormClone.id = "updateForm";
    updateModal.append(itemFormClone);
    //
    userContainer.append(headerSection, profileListings, subUserContainer);
    const active = [];
    const all = [];
    await apiRequest(account, getWithJwt).then((data) => {
        console.log(data);
        profileAvatar.src = data.avatar;
        profileName.innerHTML = data.name;
        profileEmail.innerHTML = data.email;
        profileCredits.innerHTML = "Your wallet " + data.credits + "$";
        data.listings.forEach((element) => {
            subUserContainer.insertAdjacentElement(
                "beforeend",
                listingContainer(
                    element.media[0],
                    element.title,
                    activeOrSold(element.endsAt),
                    `../item?id=${element.id}`,
                    element.id
                )
            );
            if (checkActive(element.endsAt)) {
                active.push(element);
            }
            all.push(element);
        });
    });
    activeBtn.append("(" + active.length + ")");
    allBtn.append("(" + all.length + ")");
    activeBtn.addEventListener("click", () => {
        refresh(subUserContainer, userContainer, active, listingContainer);
    });
    allBtn.addEventListener("click", () => {
        refresh(subUserContainer, userContainer, all, listingContainer);
    });
    button.addEventListener("click", (e) => {
        itemForm.classList.toggle("hidden");
    });
    itemForm.addEventListener("submit", (e) => {
        e.preventDefault();
        createEntry(e);
    });
};
