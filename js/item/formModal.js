import { createElement } from "../tools/factory.js";
import { minutesLeft } from "../tools/timeCalc/timeLeft.js";
import { load } from "../storage/index.js";
import { newBid } from "../forms/newBid.js";

export const expandForm = (btn, title, bid, endsAt, allBids, firstImg, itemId) => {
    btn.addEventListener("click", (e) => {
        const modal = document.createElement("div");
        modal.setAttribute("class", "modal");
        modal.classList.add("bg-auctionGrey");
        document.querySelector("main").append(modal);
        const modalContent = bidForm;

        modal.append(modalContent);
        header.innerHTML = title;
        amountToBid.innerHTML = "Your bid: " + bid + "$";
        img.src = firstImg;
        endDate.innerHTML =
            "<span class='underline underline-offset-2 '>current status</span>" +
            minutesLeft(endsAt, allBids);
        currentCredit.innerHTML = "Your credits " + load("credits") + "$";
        input.value = bid;
        closeBtn.addEventListener("click", () => {
            document.querySelector(".modal").remove();
            window.location.reload();
        });
        document.getElementById("modalSubmit").addEventListener("submit", (e) => {
            e.preventDefault();
            e.stopImmediatePropagation();
            newBid(e, itemId);
            submitBtn.classList.remove("bg-orange-300");
            submitBtn.classList.add("bg-green-200");
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        });
    });
};

const bidForm = createElement("form", {
    class: "bg-almostWhite w-4/5 md:w-1/2 h-2/3 mx-auto justify-around flex flex-col my-2 p-5 relative bg-auctionWhite",
    id: "modalSubmit",
});
//-------------COLSE-BTN
const closeBtn = createElement("i", {
    class: " text-auctionRed absolute p-4 aspect-square right-0 top-0 h-7",
});
closeBtn.innerHTML = "<i class='fa-solid fa-xmark fa-xl'></i>";
//---------------TITLE
const header = createElement("h2", {
    class: "text-logoBg font-bold w-full text-xl mx-auto my-2 p-1 flex place-content-center ",
});
//----------IMAGE
const img = createElement("img", {
    class: "object-top  object-cover h-2/3 shrink w-4/5 mx-auto currentImg aspect-square drop-shadow-md",
});
//----------------ENDATE
const endDate = createElement("h4", {
    class: " py-3 mx-auto text-lg flex place-content-center flex-col text-logoBg font-bold",
});
//-------------CURRENT CREDIT
const currentCredit = createElement("h4", {
    class: "py-3 absolute left-0 top-1  text-logoBg font-bold",
});

//----------------AMOUNT
const amountToBid = createElement("h3", {
    class: "w-full py-3 mx-auto text-lg flex place-content-center text-logoBg font-bold",
});
//---------------INPUT
const input = createElement("input", {
    id: "bidInput",
    name: "amount",
    type: "number",
    class: "bg-almostWhite border border-2 w-10 bg-white text-auctionGrey hidden",
    placeholder: "$",
});
//--------------SUBMIT BUTTON
const submitBtn = createElement("input", {
    type: "submit",
    value: "Confirm",
    class: "border text-lg font-bold border-radius-sm bg-orange-300 text-auctionBrown py-2 px-4",
});

bidForm.append(header);
bidForm.append(closeBtn);
bidForm.append(img);
bidForm.append(endDate);
bidForm.append(currentCredit);
bidForm.append(amountToBid);
bidForm.append(input);
bidForm.append(submitBtn);

const bidBtn = createElement("input", {
    type: "submit",
    value: "Confirm",
    class: "border border-radius-sm bg-white text-auctionBlue px-2",
});
const bidSection = createElement("div", {
    class: "w-1/2 shrink flex justify-end p-2 gap-1",
});
// BIT INPUT (left side)

const bidLabel = createElement("label", {
    for: "bidInput",
    class: " text-auctionBrown text-base w-1/2 flex place-content-center items-center",
});
bidLabel.textContent = "Place a bid";
// THE FORM (both appended)
