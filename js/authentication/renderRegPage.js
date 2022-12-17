import { regWrapper } from "./formElements";
import { itemContainer } from "../queryselectors";
export const renderRegPage = () => {
    itemContainer.innerHTML = "";
    itemContainer.insertAdjacentElement("beforeend", regWrapper);
};
