import { createElement } from "../tools/factory";
import { itemForm } from "./entryInputs";
import { timeGap } from "../tools/timeCalc.js/definitions.js";

// HEADER OF PAGE --------------------------------------------------------
export const headerSection = createElement("div", {
    class: "w-full  lg:w-2/4 md:w-3/4 self-center flex flex-wrap",
});

export const profileAvatar = createElement("img", {
    class: "w-1/2 apect-square mx-auto border rounded-lg max-w-lg",
});
// DETAILS; MAIL CREDITS NAME ETC
export const profileDetails = createElement("div", {
    class: "w-1/2 text-auctionGrey grid grid-rows-3 p-2",
});
export const profileName = createElement("h2", {
    class: " text-auctionGrey text-xl ",
});
export const profileEmail = createElement("p", { class: " text-auctionGrey" });
export const profileCredits = createElement("p", { class: " text-auctionGrey" });

profileDetails.append(profileName, profileEmail, profileCredits);

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
profileListings.append(subHeader1);
