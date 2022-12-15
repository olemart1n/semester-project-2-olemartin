import { fetchOptions, endpoints, base } from "../endpoints.js";
const { deleteOpt } = fetchOptions;
const { listings } = endpoints;
export const deleteFunc = (button) => {
    button.addEventListener("click", () => {
        fetch(base + listings + "/" + button.id, deleteOpt);
        setTimeout(() => {
            window.location.reload();
        }, 500);
    });
};
