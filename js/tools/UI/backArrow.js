export const backArrow = (element) => {
    element.addEventListener("click", () => {
        window.location.reload();
    });
    element.innerHTML = "&#x2190; back";
};
