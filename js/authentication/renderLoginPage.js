import { wrapper } from "./formElements";

const container = document.querySelector("#itemContainer");

export const renderLoginPage = () => {
    container.insertAdjacentElement("beforeend", wrapper);
};
