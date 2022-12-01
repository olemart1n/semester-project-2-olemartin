import { createElement } from "../../tools/factory";
import { apiRequest } from "../../tools/fetch";
import { endpoints, fetchOptions } from "../../endpoints.mjs";
import { createEntry } from "../../forms/entry";
import { itemForm } from "./entryInputs";
const { account } = endpoints;
const { getWithJwt } = fetchOptions;
const listingFeed = document.querySelector("#listingsFeed");
const main = document.querySelector("main");
main.classList.add("flex");
main.classList.add("flex-col");

const profileContainer = createElement("div", {
    class: "flex flex-wrap justify-around md:w-3/4 m-auto p-3 bg-auctionBlue mb-8",
});

// BUTTON ----------
const button = createElement("button", {
    class: " px-3 py-2 bg-auctionRed rounded-none mx-auto border-none",
});
button.innerHTML = "Add listing";

export const renderProfile = () => {
    listingFeed.innerHTML = "";
    document.title = `Profile | AuctionHouse`;
    // itemForm.innerHTML = entryInputs();
    main.append(profileContainer);
    apiRequest(account, getWithJwt).then((data) => {
        profileContainer.insertAdjacentHTML(
            "beforeend",
            `
            <div>
            <h2 class="text-lg font-bold">${data.name}<h2>
            <img src=${data.avatar} alt="profileAvatar">
            <p class="text-lg">${data.email}</p>
            </div>
            <div>
            <h3 class="text-xl font-bold">credits left: ${data.credits}</h3>
            </div>
            <div class="w-full mt-20 flex"> 
            <p class="text-xl mx-auto">YOUR LISTINGS ${data._count.listings}</p>
            </div>
        `
        );
        console.log(data);
    });
    main.insertAdjacentElement("beforeend", button);
    main.insertAdjacentElement("beforeend", itemForm);
    button.addEventListener("click", (e) => {
        itemForm.classList.toggle("hidden");
    });
    itemForm.addEventListener("submit", (e) => {
        e.preventDefault();
        createEntry(e);
    });
};
