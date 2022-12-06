import { endpoints, fetchOptions } from "../endpoints.mjs";
import { apiRequest } from "../tools/fetch.js";
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
};
