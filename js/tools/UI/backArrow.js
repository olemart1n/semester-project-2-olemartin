import { refreshKey } from "../../storage";

export const backArrow = (element) => {
    element.addEventListener("click", () => {
        window.location.href = "/semester-project-2-olemartin/";
        refreshKey("/semester-project-2-olemartin/");
    });
    element.innerHTML = "&#x2190; back";
};
