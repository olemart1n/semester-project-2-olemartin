import { apiRequest } from "../tools/fetch.js";
import { counterContainer } from "../tools/timeCalc/countdown.js";
import { carousell } from "./carousell.js";
import { inputKeyup } from "./inputKeyEvent.js";
import { timeGap } from "../tools/timeCalc/definitions.js";
import { backArrow } from "../tools/UI/backArrow.js";
import { authCheck } from "../tools/authCheck.js";
import { viewBids } from "./allBidsEvent.js";
import {
    leftSideText,
    rightSideText,
    bidInput,
    bidBtn,
    bidSection,
    bidLabel,
    mainDiv,
    slideContainer,
    title,
    seller,
    imageLabels,
    descriptionText,
    descriptionTags,
    allBidsBtn,
    allBids,
} from "./layOutElements.js";
import { h2Header, itemContainer, userContainer } from "../queryselectors.js";
import { getToUser } from "../user/getToUser.js";

export const renderItem = (id) => {
    h2Header.innerHTML = "";
    document.title = `Item | AuctionHouse`;
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
            seller.innerHTML = `<button class="border border-black px-2 rounded-none user${data.seller.name}" id"../user/${data.seller.name}"><span class="text-auctionGrey">seller: </span class="font-bold text-lg">${data.seller.name}</button>`;
        } else {
            seller.innerHTML = `<button disabled="disabled">${data.seller.name} <span class="text-auctionGrey">(log in to visit ) </span></button>`;
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
        getToUser(data.seller.name, data.seller.name);
    });
};
