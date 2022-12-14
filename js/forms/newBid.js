import { fetchOptions } from "../endpoints.js";
import { apiRequest } from "../tools/fetch.js";
import { load, save } from "../storage/index.js";
const { entry } = fetchOptions;
export const newBid = (inputs, itemId) => {
    const form = new FormData(inputs.currentTarget);
    const formInputs = Object.fromEntries(form.entries());
    const { amount } = formInputs;
    entry.body = JSON.stringify({
        amount: Number(amount),
    });
    console.log(formInputs);
    console.log(itemId);
    apiRequest(`listings/${itemId}/bids`, entry).then((data) => {
        console.log(data);
    });
    let currentWallet = load("credits");
    const newWallet = currentWallet - Number(amount);
    save("credits", newWallet);
};
