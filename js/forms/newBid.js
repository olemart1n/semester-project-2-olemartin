import { endpoints, fetchOptions } from "../endpoints.mjs";
import { apiRequest } from "../tools/fetch.js";
const { entry } = fetchOptions;
export const newBid = (inputs) => {
    const form = new FormData(inputs.currentTarget);
    const formInputs = Object.fromEntries(form.entries());
    const { amount } = formInputs;
    entry.body = JSON.stringify({
        amount: amount,
    });
    console.log(formInputs);
    // apiRequest(`listings/${itemId}/bids`, entry).then((data) => {
    //     console.log(data);
    // });
};
