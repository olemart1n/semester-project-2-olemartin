import { createElement } from "../tools/factory.js";

export const counterBox = createElement("div", {
    class: "counterBox w-full grid grid-cols-3  my-5 p-0",
});

// -- -- GREEN SECTION
export const leftSideText = createElement("p", { class: "text-auctionGrey" });
export const rightSideText = createElement("p", { class: "text-auctionGrey" });
export const highestBid = createElement("div", {
    class: "w-full bg-green-200 flex justify-around md:w-3/4 mx-auto my-2  flex-wrap ",
});
highestBid.append(leftSideText, rightSideText);

// ALL BIDS BUTTON AND SECTION
export const allBidsBtn = createElement("button", {
    class: "px-1 mx-auto text-auctionGrey rounded-sm text-sm bg-auctionYellow mx-auto",
});
allBidsBtn.innerHTML = "View all bids &darr;";
export const allBids = createElement("div", {
    class: "text-auctionGrey w-full hidden bg-auctionYellow w-1/2 mx-auto",
    id: "bid-section",
});
// FORM
export const bidInput = createElement("input", {
    id: "bidInput",
    name: "amount",
    type: "number",
    class: "bg-almostWhite border border-2 w-10 bg-white text-auctionGrey",
    placeholder: "$",
});
export const bidBtn = createElement("input", {
    type: "button",
    value: "SUBMIT",
    class: "border border-radius-sm bg-white text-auctionBlue px-2",
});
export const bidSection = createElement("div", {
    class: "w-1/2 shrink flex justify-end p-2 gap-1",
});
// BIT INPUT (left side)
export const bidLabel = createElement("label", {
    for: "bidInput",
    class: " text-auctionBrown text-base w-1/2 flex place-content-center items-center",
});
bidLabel.textContent = "Place a bid";
// THE FORM (both appended)
export const bidForm = createElement("div", {
    class: "bg-auctionBlue w-full bg-opacity-50 md:w-3/4 mx-auto flex my-2 p-1",
});

export const mainDiv = createElement("div", {
    class: "relative flex flex-col justify-between bg-almostWhite p-3",
});
export const slideContainer = createElement("div", {
    class: "",
});

export const title = createElement("h1", {
    class: "text-auctionBlue block text-xl mx-auto flex place-content-center",
});
export const seller = createElement("p", { class: "text-auctionBrown mx-auto" });

//---------------------------------------------------------
export const imageLabels = createElement("div", {
    class: "flex place-content-center align-center my-5 flex-wrap",
});
const imageLabelsHeader = createElement("small", {
    class: "text-auctionGrey w-full flex place-content-center",
});
imageLabelsHeader.innerHTML = "images";
imageLabels.append(imageLabelsHeader);
export const itemDetails = createElement("div", {
    class: "bg-white p-5 mx-auto flex flex-col   md:w-4/5 border border-auctionBrown rounded-lg drop-shadow-sm my-10",
});
mainDiv.append(seller, itemDetails);

//------------------------------------------------------
export const description = createElement("div", {
    class: "mx-auto my-5 md:w-4/5 flex flex-wrap divide-x divide-slate-200",
});
export const descriptionHeader = createElement("h3", {
    class: "text-md text-auctionBlue w-full",
});
descriptionHeader.innerHTML = "Description";
export const descriptionText = createElement("p", { class: "text-auctionGrey w-1/2 p-1" });
description.append(descriptionHeader);

export const descriptionTags = createElement("p", {
    class: "text-auctionGrey w-1/2 p-1",
});

description.append(descriptionText, descriptionTags);

bidSection.append(bidInput, bidBtn);
bidForm.append(bidLabel, bidSection);
//IMAGE CONTAINER
itemDetails.append(
    title,
    imageLabels,
    slideContainer,
    counterBox,
    highestBid,
    allBidsBtn,
    allBids,
    bidForm,
    description
);
