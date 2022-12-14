import { endpoints, fetchOptions } from "../endpoints.js";
import { apiRequest } from "../tools/fetch.js";
const { update } = fetchOptions;
const { listings } = endpoints;
export const updateEntry = (form, id) => {
    const newForm = new FormData(form.currentTarget);
    const updateForm = Object.fromEntries(newForm.entries());
    const { tags, title, description } = updateForm;
    let imageArray = [];
    let tagsArray = tags.split(",");
    const mediaform = form.currentTarget.querySelectorAll("[name='media'");
    mediaform.forEach((element) => {
        if (element.value.length > 0) {
            imageArray.push(element.value);
        }
    });
    update.body = JSON.stringify({
        title: title,
        description: description,
        tags: tagsArray,
        media: imageArray,
    });
    apiRequest(listings + "/" + id, update).then((data) => {
        console.log(data);
    });
};
