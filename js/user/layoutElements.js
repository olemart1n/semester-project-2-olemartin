import { createElement } from "../tools/factory.js";
import { timeGap } from "../tools/timeCalc/definitions.js";
// HEADER OF PAGE --------------------------------------------------------
export const headerSection = createElement("div", {
    class: "w-full flex lg:w-2/4 md:w-3/4 self-center",
});

export const userAvatar = createElement("img", {
    class: "w-1/2 apect-square mx-auto border rounded-lg max-w-lg",
});

export const userName = createElement("h2", {
    class: "w-1/2 mx-auto text-auctionGrey text-xl flex items-center place-content-center",
});
headerSection.append(userAvatar);
headerSection.append(userName);

//-----------------------------------------------------------------------------
// USER LISTINGS
export const allItemsContinaer = createElement("div", { class: "py-20" });
export const subHeader1 = createElement("h2", { class: "text-lg text-auctionGrey" });
allItemsContinaer.append(subHeader1);
//
export const itemConainer = (aHref, aSrc, aTitle, anItemStatus) => {
    const itemLink = createElement("button", {
        class: `w-full grid grid-cols-3 relative h-24 items-center border rounded border-auctionBrown my-2 place-content-center itemm${aHref}`,
    });
    const itemImg = createElement("img", { class: "h-12 w-12 aspect-square object-cover mx-auto" });
    itemImg.src = aSrc;
    const itemTitle = createElement("p", { class: "text-auctionGrey" });
    itemTitle.innerHTML = aTitle;
    const itemStatus = createElement("p", { class: "text-auctionGrey" });
    itemStatus.innerHTML = anItemStatus;
    // APPENDING ELEMENTS
    itemLink.append(itemImg, itemTitle, itemStatus);
    return itemLink;
};

export const activeOrSold = (data) => {
    if (timeGap(data) < 0) {
        return "<span class='bg-red-300 bg-opacity-30 p-2 text-auctionGrey'>FINISED</span>";
    } else {
        return "<span class='bg-auctionGreen bg-opacity-30 p-2 text-auctionGrey'>ACTIVE</span>";
    }
};
// --------------------------------------------------------------------------------

export const allBidsContainer = createElement("div", { class: "py-10" });
export const subHeader2 = createElement("h2", { class: "text-lg text-auctionGrey " });
allBidsContainer.append(subHeader2);
export const bidContainer = (aHref, aTitle, anItemStatus) => {
    const bidLink = createElement("a", {
        class: "w-full grid grid-cols-3 relative h-20 items-center border rounded border-auctionBrown my-2 place-content-center",
    });
    bidLink.href = aHref;
    const itemTitle = createElement("p", { class: "text-auctionGrey" });
    itemTitle.innerHTML = aTitle;
    const itemStatus = createElement("p", { class: "text-auctionGrey" });
    itemStatus.innerHTML = anItemStatus;
    bidLink.append(itemTitle, "-", itemStatus);
    return bidLink;
};
