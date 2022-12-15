import { createElement } from "../tools/factory.js";
import { itemForm } from "./entryInputs.js";
import { timeGap } from "../tools/timeCalc/definitions.js";
import { deleteFunc } from "./delete.js";
import { updateFunc } from "./update.js";
import { changeAvatar } from "./editAvatar.js";
import { load } from "../storage/index.js";
// HEADER OF PAGE --------------------------------------------------------
export const headerSection = createElement("div", {
    class: "w-full  lg:w-2/4 sm:w-3/4 self-center flex flex-wrap",
});

export const profileAvatar = createElement("img", {
    class: "w-1/3 sm:w-1/2 apect-square mx-auto border rounded-lg max-w-lg",
});
// DETAILS; MAIL CREDITS NAME ETC
export const profileDetails = createElement("div", {
    class: "w-2/3 sm:w-1/2 text-auctionGrey sm:grid sm:grid-rows-4 p-2",
});
export const profileName = createElement("h2", {
    class: " text-auctionGrey text-xl ",
});
export const editAvatarBbt = createElement("button", {
    class: "border bg-auctionGrey text-almostWhite h-8 m-0 text-sm w-1/2 self-end",
});
editAvatarBbt.innerHTML = "Edit avatar";
changeAvatar(editAvatarBbt);
export const profileEmail = createElement("p", { class: " text-auctionGrey" });
export const profileCredits = createElement("p", { class: " text-auctionGrey" });

profileDetails.append(profileName, profileEmail, profileCredits, editAvatarBbt);

// ADD-LISTING BUTTON ----------
const createListingContainer = createElement("div", { class: "w-full   my-5" });
export const button = createElement("button", {
    class: " px-3 py-2 bg-auctionGreen rounded mx-auto border-none w-full",
});
createListingContainer.append(button, itemForm);
button.innerHTML = "Add listing";
headerSection.append(profileAvatar, profileDetails, createListingContainer);

// PROFILES LISTINGS
export const profileListings = createElement("div", { class: "py-20" });
export const subHeader1 = createElement("h2", { class: "text-lg text-auctionGrey " });
subHeader1.innerHTML = "Your listings";
export const subNav = createElement("div", { class: "w-full flex justify-start" });
export const activeBtn = createElement("button", {
    class: "rounded-xl bg-auctionBlue  mx-1 md:w-40 py-1 w-1/4",
});
activeBtn.innerHTML = "Acitve";
export const allBtn = createElement("button", {
    class: "rounded-xl bg-logoBg mx-1 py-1 md:w-40 w-1/4  ",
});
allBtn.innerHTML = "All";
subNav.append(activeBtn, allBtn);
profileListings.append(subHeader1, subNav);

// THE ELEMENT THAT CREATES PR ITERATION
export const listingContainer = (imgSrc, title, status, link, id) => {
    const listingItem = createElement("div", {
        class: "w-full grid grid-rows-4 sm:grid-rows-1 sm:grid-cols-4 relative sm:h-40 border rounded border-auctionBrown border-1 my-2",
    });
    // GRID 1
    const grid1 = createElement("img", {
        class: "h-20 w-20 aspect-square object-cover m-auto",
    });
    grid1.src = imgSrc;
    // GRID 2
    const grid2 = createElement("div", { class: "flex flex-col justify-around" });
    const itemTitle = createElement("p", { class: "text-auctionGrey m-auto" });
    itemTitle.innerHTML = title;
    const itemStatus = createElement("p", { class: "text-auctionGrey m-auto" });
    itemStatus.innerHTML = status;
    grid2.append(itemTitle, itemStatus);

    // GRID 3
    const grid3 = createElement("div", { class: "flex flex-col justify-around p-3" });
    const updateBtn = createElement("button", {
        class: "bg-auctionBlue text-auctionGrey w-1/2 mx-auto my-1",
        id: id,
    });
    updateFunc(updateBtn);
    updateBtn.innerHTML = "Update";
    const deleteBtn = createElement("button", {
        class: "bg-auctionRed text-auctionGrey w-1/2 mx-auto my-1",
        id: id,
    });
    deleteBtn.innerHTML = "Delete";
    deleteFunc(deleteBtn);
    grid3.append(updateBtn, deleteBtn);
    // GRID 4
    const grid4 = createElement("div", { class: "flex p-3" });
    const vistLink = createElement("a", {
        class: "text-auctionGrey m-auto bg-veryLightGrey h-1/2 w-full border rounded-lg items-center flex place-content-center",
    });
    vistLink.href = link;
    vistLink.innerHTML = "Visit";
    grid4.append(vistLink);
    // APPEND THE $ ELEMENTS
    listingItem.append(grid1, grid2, grid3, grid4);
    return listingItem;
};

export const activeOrSold = (data) => {
    if (timeGap(data) < 0) {
        return "<span class='bg-red-300 bg-opacity-30 p-2 text-auctionGrey'>FINISED</span>";
    } else {
        return "<span class='bg-auctionGreen bg-opacity-30 p-2 text-auctionGrey'>ACTIVE</span>";
    }
};

export const checkActive = (data) => {
    if (timeGap(data) < 0) {
        return false;
    }
    return true;
};

// CHANGE AVATAR FORM
export const avatarForm = createElement("form", {
    id: "avatarForm",
    class: "w-2/3 h-2/3 rounded-sm bg-logoBg flex flex-col align-items-center relative",
});
const media = createElement("input", {
    class: " bg-almostWhite my-2 rounded p-1 text-black ",
    type: "url",
    name: "media",
    id: "avatarInput",
    placeholder: "avatar URL",
});
const submitButton = createElement("button", {
    type: "submit",
    class: "bg-auctionBlue rounded-none w-40 mx-auto my-5",
});
submitButton.innerHTML = "Update";

const avatarImg = createElement("img", {
    class: "w-1/2 rounded-lg m-2",
    name: "avatar",
});
avatarImg.src = load("avatar");

avatarForm.append(avatarImg, media, submitButton);
