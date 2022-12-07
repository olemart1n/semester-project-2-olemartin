import { createElement } from "../tools/factory";
import { apiRequest } from "../tools/fetch";
import { endpoints, fetchOptions } from "../endpoints.mjs";
import { createEntry } from "../forms/entry";
import { itemForm } from "./entryInputs";
const { account } = endpoints;
const { getWithJwt } = fetchOptions;
const listingFeed = document.querySelector("#listingsFeed");
const main = document.querySelector("main");
const listingHeader = document.querySelector("#listingHeader");
main.classList.add("flex");
main.classList.add("flex-col");

const profileContainer = createElement("div", {
    class: "flex flex-wrap justify-around md:w-3/4 m-auto p-3 bg-auctionBlue bg-opacity-50 mb-8",
    id: "profileContainer",
});

// BUTTON ----------
const button = createElement("button", {
    class: " px-3 py-2 bg-auctionRed rounded-none mx-auto border-none w-full",
});
button.innerHTML = "Add listing";

export const renderProfile = async () => {
    listingFeed.innerHTML = "";
    document.title = `Profile | AuctionHouse`;
    listingHeader.innerHTML = "Your details";
    main.append(profileContainer);
    await apiRequest(account, getWithJwt).then((data) => {
        const listings = data.listings;
        let listContainer = createElement("div", { class: "bg-autcionRed flex flex-col border-r" });
        listings.forEach((element) => {
            listContainer.innerHTML += `<a href="">${element.title}</a>`;
        });
        profileContainer.insertAdjacentHTML(
            "beforeend",
            `
            <div>
            <h2 class="text-lg font-bold">${data.name}<h2>
            <img src=${data.avatar} alt="profileAvatar">
            <p class="text-lg">${data.email}</p>
            </div>
            <div>
            <div class="">
            <h3 class="text-xl font-bold">credits left: ${data.credits}</h3>
            <p class="text-xl mx-auto">YOUR LISTINGS ${data._count.listings}</p>
            <div id="listingsList">
            </div>
            </div>
            </div>
        `
        );
        document.querySelector("#listingsList").append(listContainer);
        console.log(listContainer);
    });
    // document.querySelector("#listingsList").append(listContainer);
    profileContainer.insertAdjacentElement("beforeend", button);
    profileContainer.insertAdjacentElement("beforeend", itemForm);
    button.addEventListener("click", (e) => {
        itemForm.classList.toggle("hidden");
    });
    itemForm.addEventListener("submit", (e) => {
        e.preventDefault();
        createEntry(e);
    });
};
