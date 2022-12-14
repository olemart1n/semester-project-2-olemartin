import { activeOrSold } from "./layoutElements.js";
export const refresh = (container, maincontainer, active, iterationEl) => {
    container.remove();
    container.innerHTML = "";
    maincontainer.append(container);
    active.forEach((element) => {
        container.insertAdjacentElement(
            "beforeend",
            iterationEl(
                element.media[0],
                element.title,
                activeOrSold(element.endsAt),
                `../item?id=${element.id}`,
                element.id
            )
        );
    });
};
