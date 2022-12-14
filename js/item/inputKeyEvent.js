import { expandForm } from "./formModal.js";
export const inputKeyup = (input, currentBid, btn, title, endsAt, allBids, firstImg, itemId) => {
    input.addEventListener("keyup", (e) => {
        e.stopImmediatePropagation();
        const currentInput = e.currentTarget.value;
        if (currentInput - 1 < currentBid) {
            btn.classList.remove("bg-white");
            btn.classList.add("bg-red-200");
            btn.setAttribute("disabled", "disabled");
            input.setAttribute("title", `amount to low`);
        } else {
            btn.classList.add("bg-white");
            btn.classList.remove("bg-red-200");
            btn.removeAttribute("disabled");
            input.removeAttribute("title");
            expandForm(btn, title, currentInput, endsAt, allBids, firstImg, itemId);
        }
    });
};
