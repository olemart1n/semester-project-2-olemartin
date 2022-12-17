import { createElement } from "../tools/factory.js";
import { timeGap } from "../tools/timeCalc/definitions.js";

export const newBtn = createElement("button", {
    class: "text-almostWhite bg-logoBg w-1/4  rounded-none px-1 border-none mx-auto w-30 enabled:hover:outline-none",
    id: "filter-link-1",
});
newBtn.innerHTML = "Newest";
export const expireSoonBtn = createElement("button", {
    class: "text-almostWhite bg-logoBg w-1/4  rounded-none px-1 border-none mx-auto w-30 enabled:hover:outline-none",
    id: "filter-link-2",
});
expireSoonBtn.innerHTML = "Expiring today";
export const nav = createElement("nav", { class: "" });
export const div1 = createElement("div", { class: "flex self-center" });
export const p = createElement("p", { class: "text-logoBg m-auto" });
p.innerHTML = "sort by";
export const twoButtonsDiv = createElement("div", {
    class: "flex flex-col md:flex-row md:pb-0 pb-0 gap-2",
});
div1.append(p);
twoButtonsDiv.append(expireSoonBtn);
twoButtonsDiv.append(newBtn);
nav.append(div1);
nav.append(twoButtonsDiv);

export const nextBtn = createElement("button", {
    class: "px-5 border border-1 text-logoBg py-2 mx-auto block",
});
nextBtn.innerHTML = "Next";

// ON SEARCH

export const byTitleButton = createElement("button", {
    class: "border border-logoBg py-1 mx-2 w-20 enabled:hover:outline-none text-black",
});
byTitleButton.innerHTML = "titles";
export const byUserButton = createElement("button", {
    class: "border border-logoBg py-1 mx-2 w-20 enabled:hover:outline-none text-black",
});
byUserButton.innerHTML = "users";
export const byTagsButton = createElement("button", {
    class: "border border-logoBg py-1 mx-2 w-20 enabled:hover:outline-none text-black",
});
byTagsButton.innerHTML = "tags";

// the elements containg each result

export const itemResult = (aHref, aSrc, aTitle, anItemStatus) => {
    const itemLink = createElement("a", {
        class: "w-full grid grid-cols-3 relative h-24 items-center border rounded border-auctionBrown my-2 place-content-center",
    });
    itemLink.href = aHref;
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

// User results has its own container with other stylings

export const userResult = (name, avatar, aTitle) => {
    const itemLink = createElement("a", {
        class: "w-full grid grid-cols-2 relative h-24 items-center border rounded border-auctionBrown my-2 place-content-center",
    });
    itemLink.href = "../user/" + name;
    const itemImg = createElement("img", { class: "h-12 w-12 aspect-square object-cover mx-auto" });
    itemImg.src = avatar;
    const itemTitle = createElement("p", { class: "text-auctionGrey" });
    itemTitle.innerHTML = aTitle;
    // APPENDING ELEMENTS
    itemLink.append(itemImg, itemTitle);
    return itemLink;
};

export const resetFilterButtons = () => {
    newBtn.classList.remove("bg-auctionBlue");
    newBtn.classList.add("bg-logoBg");
    expireSoonBtn.classList.remove("bg-auctionBlue");
    expireSoonBtn.classList.add("bg-logoBg");
};
