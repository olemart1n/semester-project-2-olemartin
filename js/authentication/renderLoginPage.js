import { wrapper } from "./formElements";
import { itemContainer } from "../queryselectors";

export const renderLoginPage = () => {
    itemContainer.insertAdjacentElement("beforeend", wrapper);
};
