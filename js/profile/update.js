import { updateEntry } from "../forms/update";
import { apiRequest } from "../tools/fetch";
import { endpoints, fetchOptions } from "../endpoints.mjs";
import { updateModal, itemFormClone } from "./profile";
const { listings } = endpoints;
const { getWithJwt } = fetchOptions;

export const updateFunc = (button) => {
    button.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        itemFormClone.classList.remove("hidden");
        updateModal.classList.add("modal");
        updateModal.classList.remove("hidden");
        const date = itemFormClone.dateInput;
        date.remove();
        itemFormClone.querySelector("button").remove();
        const tags = itemFormClone.tags;
        const mediaArr = Array.from(itemFormClone.media);
        const children = itemFormClone.querySelectorAll(".hidden");
        children.forEach((element) => {
            element.classList.remove("hidden");
        });
        apiRequest(listings + "/" + e.currentTarget.id, getWithJwt).then((data) => {
            itemFormClone.title.value = data.title;
            itemFormClone.description.value = data.description;
            const media = data.media;
            media.forEach((element, index) => {
                mediaArr[index].value = element;
            });
            tags.value = data.tags.join(", ");
        });
        // updateModal.addEventListener("click", () => {
        //     updateModal.remove();
        // });
        itemFormClone.addEventListener("submit", (e) => {
            e.preventDefault();
            updateEntry(e, button.id);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        });
    });
};
