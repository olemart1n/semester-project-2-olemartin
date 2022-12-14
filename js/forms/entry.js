import { endpoints, fetchOptions } from "../endpoints.js";
import { apiRequest } from "../tools/fetch.js";
const { entry } = fetchOptions;
const { listings } = endpoints;
export const createEntry = (inputs) => {
    const form = new FormData(inputs.currentTarget);
    const formInputs = Object.fromEntries(form.entries());
    const { date, tags, title, description } = formInputs;
    const newDate = new Date(date);
    const jsonDate = newDate.toJSON();
    let imageArray = [];
    let tagsArray = tags.split(",");
    const mediaInputs = document.querySelectorAll("[name='media'");
    mediaInputs.forEach((element) => {
        if (element.value.length > 0) {
            imageArray.push(element.value);
        }
    });
    entry.body = JSON.stringify({
        title: title,
        description: description,
        tags: tagsArray,
        media: imageArray,
        endsAt: jsonDate,
    });
    apiRequest(listings, entry).then((data) => {
        console.log(data);
    });
};
