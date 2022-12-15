import { createElement } from "../tools/factory.js";

export const itemForm = createElement("form", {
    class: " hidden mt-8 bg-logoBg p-3 relative flex flex-col justify-center mx-auto md:w-2/3 w-full",
    id: "newItem",
    method: "post",
    required: "required",
});
const titleLabel = createElement("small", { class: "text-almostWhite mx-auto mt-2" });
titleLabel.innerHTML = "Title";
const title = createElement("input", {
    class: "bg-almostWhite mt-2 rounded p-1 text-black py-1",
    type: "text",
    name: "title",
    id: "titleInput",
    placeholder: "Title",
    required: "required",
});
const tagsLabel = createElement("small", { class: "text-almostWhite mx-auto mt-2" });
tagsLabel.innerHTML = "tags";
const tags = createElement("input", {
    class: "bg-almostWhite mt-2 rounded p-1 text-black py-1",
    type: "text",
    name: "tags",
    id: "tagsInput",
    placeholder: "tags",
});
const descriptionLabel = createElement("small", { class: "text-almostWhite mx-auto mt-2" });
descriptionLabel.innerHTML = "Description";
const description = createElement("input", {
    class: "bg-almostWhite mt-2 rounded p-1 text-black py-1",
    type: "text",
    name: "description",
    id: "descriptionInput",
    placeholder: "description",
});
const mediaLabel = createElement("small", { class: "text-almostWhite mx-auto mt-2" });
mediaLabel.innerHTML = "Image URL's";
const media = createElement("input", {
    class: "bg-almostWhite mt-2 rounded p-1 text-black py-1",
    type: "url",
    name: "media",
    id: "mediaInput",
    placeholder: "media URL",
});
const media1 = createElement("input", {
    class: "hidden bg-almostWhite mt-2 rounded p-1 text-black py-1",
    type: "url",
    name: "media",
    id: "mediaInput1",
    placeholder: "media URL",
    disabled: "disabled",
});
const media2 = createElement("input", {
    class: "hidden bg-almostWhite mt-2 rounded p-1 text-black py-1",
    type: "url",
    name: "media",
    id: "mediaInput2",
    placeholder: "media URL",
    disabled: "disabled",
});
const media3 = createElement("input", {
    class: "hidden bg-almostWhite mt-2 rounded p-1 text-black py-1",
    type: "url",
    name: "media",
    id: "mediaInput3",
    placeholder: "media URL",
    disabled: "disabled",
});
const date = createElement("input", {
    class: "bg-almostWhite mt-2 rounded p-1 text-black py-1",
    type: "datetime-local",
    name: "date",
    id: "dateInput",
    placeholder: "ends at",
    required: "required",
});
const submit = createElement("input", {
    class: "mt-2 rounded-none py-3 bg-auctionBlue",
    type: "submit",
    placeholder: "submit",
});
const btn = createElement("button", {
    class: "text-sm p-0 m-0 border rounded-none mx-auto px-1 mt-1",
    type: "button",
});
btn.innerHTML = "Add photos &#8595";
btn.addEventListener("click", (e) => {
    media1.classList.remove("hidden");
    media2.classList.remove("hidden");
    media3.classList.remove("hidden");
    media1.removeAttribute("disabled");
    media2.removeAttribute("disabled");
    media3.removeAttribute("disabled");
    e.currentTarget.classList.add("hidden");
});
itemForm.append(titleLabel);
itemForm.append(title);
itemForm.append(tagsLabel);
itemForm.append(tags);
itemForm.append(descriptionLabel);
itemForm.append(description);
itemForm.append(mediaLabel);
itemForm.append(media);
itemForm.append(media1);
itemForm.append(media2);
itemForm.append(media3);
itemForm.append(btn);
itemForm.append(date);
itemForm.append(submit);
