import { expandForm } from "./formModal";
export const inputKeyup = (input, currentBid, btn, title, endsAt, allBids, firstImg, itemId) => {
    input.addEventListener("keyup", (e) => {
        const currentInput = e.currentTarget.value;
        if (currentInput - 1 < currentBid) {
            btn.classList.remove("bg-white");
            btn.classList.add("bg-red-200");
            btn.setAttribute("disabled", "disabled");
            input.setAttribute("title", `amount to low`);
        } else {
            btn.classList.add("bg-white");
            btn.classList.remove("bg-red-100");
            btn.removeAttribute("disabled");
            input.removeAttribute("title");
            expandForm(btn, title, currentInput, endsAt, allBids, firstImg, itemId);
        }
    });
};
