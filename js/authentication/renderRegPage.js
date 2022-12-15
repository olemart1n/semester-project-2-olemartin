import { regWrapper } from "./formElements";

const container = document.querySelector("#itemContainer");
export const renderRegPage = () => {
    container.insertAdjacentElement("beforeend", regWrapper);
};
