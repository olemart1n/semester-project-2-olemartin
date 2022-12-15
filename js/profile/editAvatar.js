import { endpoints, fetchOptions } from "../endpoints.js";
import { apiRequest } from "../tools/fetch.js";
import { updateModal1 } from "./profile.js";
import { avatarForm } from "./layoutElements.js";
import { debounce } from "../tools/debounce.js";
import { save, remove } from "../storage/index.js";
import { createElement } from "../tools/factory.js";
const { editAvatar } = endpoints;
const { update } = fetchOptions;

export const changeAvatar = (btn) => {
    btn.addEventListener("click", (e) => {
        e.stopImmediatePropagation();
        updateModal1.classList.remove("hidden");
        updateModal1.classList.add("modal");
        const closeBtn = createElement("i", {
            class: "fa-solid fa-xmark fa-xl text-almostWhite absolute p-4 aspect-square right-5 top-5 h-7 hover:bg-auctionGreen",
        });
        updateModal1.append(avatarForm, closeBtn);
        const imgInput = avatarForm.media;
        const img = avatarForm.avatar;
        closeBtn.addEventListener("click", () => {
            updateModal1.classList.add("hidden");
            updateModal1.classList.remove("modal");
        });
        imgInput.addEventListener(
            "input",
            debounce((e) => {
                img.src = e.target.value;
            }, 1000)
        );
        avatarForm.addEventListener("submit", (e) => {
            e.preventDefault();
            update.body = JSON.stringify({
                avatar: imgInput.value,
            });
            apiRequest(editAvatar, update).then((data) => {
                console.log(data);
                remove("avatar");
                save("avatar", data.avatar);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            });
        });
    });
};
