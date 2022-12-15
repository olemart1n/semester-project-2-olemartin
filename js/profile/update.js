import { updateEntry } from "../forms/update.js";
import { apiRequest } from "../tools/fetch.js";
import { endpoints, fetchOptions } from "../endpoints.js";
import { updateModal, itemFormClone } from "./profile.js";
import { createElement } from "../tools/factory.js";
const { listings } = endpoints;
const { getWithJwt } = fetchOptions;

export const updateFunc = (button) => {
    button.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        const closeBtn = createElement("i", {
            class: "fa-solid fa-xmark fa-xl text-almostWhite absolute p-4 aspect-square right-0 top-0 h-7 hover:bg-auctionGreen",
        });
        itemFormClone.append(closeBtn);
        itemFormClone.classList.remove("hidden");
        updateModal.classList.add("modal");
        updateModal.classList.remove("hidden");
        const date = itemFormClone.dateInput;
        date.remove();
        const btn = itemFormClone.querySelector("button");
        btn.remove();
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
        closeBtn.addEventListener("click", () => {
            closeBtn.remove();
            itemFormClone.append(date);
            itemFormClone.append(btn);
            itemFormClone.classList.add("hidden");
            updateModal.classList.remove("modal");
            updateModal.classList.add("hidden");
        });
        itemFormClone.addEventListener("submit", (e) => {
            e.preventDefault();
            updateEntry(e, button.id);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        });
    });
};
