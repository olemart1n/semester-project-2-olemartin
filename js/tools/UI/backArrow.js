export const backArrow = (element) => {
    element.addEventListener("click", () => {
        window.location.href = "/";
    });
    element.innerHTML = "&#x2190; back";
};
