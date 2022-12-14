import { apiRequest } from "../tools/fetch.js";
import { createElement } from "../tools/factory.js";
import { counterContainer } from "../tools/timeCalc/countdown.js";
import { carousell } from "./carousell.js";
import { newBid } from "../forms/newBid.js";
import { inputKeyup } from "./inputKeyEvent.js";
import { timeGap } from "../tools/timeCalc/definitions.js";
import { backArrow } from "../tools/UI/backArrow.js";
import { authCheck } from "../tools/authCheck.mjs";
import { viewBids } from "./allBidsEvent.js";
import {
    counterBox,
    highestBid,
    leftSideText,
    rightSideText,
    bidInput,
    bidBtn,
    bidSection,
    bidLabel,
    bidForm,
    mainDiv,
    slideContainer,
    title,
    seller,
    imageLabels,
    itemDetails,
    descriptionText,
    descriptionTags,
    allBidsBtn,
    allBids,
} from "./layOutElements.js";
const itemContainer = document.querySelector("#itemContainer");
const listingFeed = document.querySelector("#listingsFeed");
const mainTag = document.querySelector("main");
const filters = document.querySelector("#filters");
const h2Header = document.querySelector("#listingHeader");

export const renderItem = () => {
    listingFeed.innerHTML = "";
    h2Header.innerHTML = "";
    filters.remove();
    document.title = `Item | AuctionHouse`;
    mainTag.classList.remove("bg-auctionBg");
    const queryString = document.location.search;
    const id = new URLSearchParams(queryString).get("id");
    const spesificItem = `listings/${id}?_seller=true&_bids=true`;
    backArrow(h2Header);

    //APPEND ELEMENTS TO MAINDIV
    itemContainer.append(mainDiv);

    apiRequest(spesificItem).then((data) => {
        if (data.media.length > 0) {
            carousell(data.media, slideContainer, imageLabels);
        } else {
            slideContainer.innerHTML = "No images added to this listing";
            slideContainer.classList.add("text-auctionGrey");
        }
        const endsAt = data.endsAt;
        title.innerHTML = data.title;
        if (authCheck()) {
            seller.innerHTML = `<a href="../user/${data.seller.name}"><span class="text-auctionGrey">seller: </span>${data.seller.name}</a>`;
        } else {
            seller.innerHTML = `<a href="#">${data.seller.name} <span class="text-auctionGrey">(log in to visit ) </span></a>`;
        }

        const currentTimeGap = timeGap(data.endsAt);
        if (currentTimeGap > 0) {
            counterContainer("", endsAt);
        }
        leftSideText.innerHTML = "Highest bid";
        if (data.bids.length > 0) {
            rightSideText.innerHTML =
                data.bids[data.bids.length - 1].bidderName +
                ": " +
                data.bids[data.bids.length - 1].amount +
                "$";
        } else {
            rightSideText.innerHTML = 0 + "$";
        }
        descriptionText.innerHTML = data.description;
        descriptionTags.innerHTML = "tags: " + data.tags.toString("");
        if (timeGap(data.endsAt) < 0) {
            bidSection.innerHTML = "Not possible to bid on this item";
        }
        const bidAmunt = data.bids[data.bids.length - 1]?.amount ?? 0;
        if (authCheck()) {
            inputKeyup(
                bidInput,
                bidAmunt,
                bidBtn,
                data.title,
                data.endsAt,
                data.bids,
                data.media[0],
                data.id
            );
        } else {
            bidLabel.innerHTML = "log in to bid";
        }
        console.log(data);
        viewBids(allBidsBtn, allBids, data.bids);
    });
};
