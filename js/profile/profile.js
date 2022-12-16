import { createElement } from "../tools/factory.js";
import { apiRequest } from "../tools/fetch.js";
import { endpoints, fetchOptions } from "../endpoints.js";
import { createEntry } from "../forms/entry.js";
import { itemForm } from "./entryInputs.js";
import { refresh } from "./clickEvents.js";
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
} from "./layoutElements.js";
import { profileContainer, h2Header } from "../queryselectors.js";
const { account } = endpoints;
const { getWithJwt } = fetchOptions;
const subprofileContainer = createElement("div", { class: "" });
//
export const updateModal = createElement("div", { class: "w-full aspect-square hidden" });
export const itemFormClone = itemForm.cloneNode(true);
//
export const updateModal1 = createElement("div", { class: "w-full aspect-square hidden" });
export const renderProfile = async () => {
    document.body.append(updateModal, updateModal1);
    profileContainer.classList.add("min-h-screen");
    document.title = `Profile | AuctionHouse`;
    h2Header.innerHTML = "Your details";
    //
    itemFormClone.id = "updateForm";
    updateModal.append(itemFormClone);
    //
    profileContainer.append(headerSection, profileListings, subprofileContainer);
    const active = [];
    const all = [];
    await apiRequest(account, getWithJwt).then((data) => {
        console.log(data);
        profileAvatar.src = data.avatar;
        profileName.innerHTML = data.name;
        profileEmail.innerHTML = data.email;
        profileCredits.innerHTML = "Your wallet " + data.credits + "$";
        data.listings.forEach((element) => {
            subprofileContainer.insertAdjacentElement(
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
        refresh(subprofileContainer, profileContainer, active, listingContainer);
    });
    allBtn.addEventListener("click", () => {
        refresh(subprofileContainer, profileContainer, all, listingContainer);
    });
    button.addEventListener("click", (e) => {
        itemForm.classList.toggle("hidden");
    });
    itemForm.addEventListener("submit", (e) => {
        e.preventDefault();
        createEntry(e);
        setTimeout(() => {
            document.location.reload();
        }, 500);
    });
};
