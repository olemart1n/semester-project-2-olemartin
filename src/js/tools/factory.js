export const createElement = (type, attributes) => {
    const element = document.createElement(type);

    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }

    return element;
};
// --------------------
// const newDiv = createElement("div", { class: "classvalue", id: "idvalue" });
// console.log(newDiv.outerHTML); // <div class="aclass" id="anId"></div>
