import { expandForm } from "./formModal";
export const inputKeyup = (input, currentBid, btn, title, endsAt, allBids, firstImg, itemId) => {
    input.addEventListener("keyup", (e) => {
        const currentInput = e.currentTarget.value;
        if (currentInput - 1 < currentBid) {
            btn.classList.remove("bg-white");
            btn.classList.add("bg-auctionRed");
            btn.setAttribute("disabled", "disabled");
        } else {
            btn.classList.add("bg-white");
            btn.classList.remove("bg-auctionRed");
            btn.removeAttribute("disabled");
            expandForm(btn, title, currentInput, endsAt, allBids, firstImg, itemId);
        }
    });
};
