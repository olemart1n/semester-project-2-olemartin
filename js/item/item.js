import { apiRequest } from "../tools/fetch.js";
import { createElement } from "../tools/factory.js";
import { oneCunterBox } from "../tools/timeCalc.js/countdown.js";
import { carousell } from "./carousell.js";
import { newBid } from "../forms/newBid.js";
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
    h2Header.addEventListener("click", () => {
        window.location.href = "/";
    });
    h2Header.innerHTML = "&#x2190; back";

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
        seller.innerHTML = data.seller.name;

        oneCunterBox("", endsAt);
        leftSideText.innerHTML = "Highest bid so far";
        if (data.bids.length > 0) {
            rightSideText.innerHTML =
                data.bids[data.bids.length - 1].bidderName +
                data.bids[data.bids.length - 1].amount +
                " " +
                "$";
        } else {
            rightSideText.innerHTML = 0 + "$";
        }
        descriptionText.innerHTML = data.description;
        descriptionTags.innerHTML = "tags: " + data.tags.toString("");
        console.log(data);
    });
    bidForm.addEventListener("submit", (e) => {
        e.preventDefault();
        newBid(e);
    });
};

{
    /* <i class="absolute fa-sharp fa-solid fa-expand top-5 right-5 text-black  fa-xl"></i> */
}
