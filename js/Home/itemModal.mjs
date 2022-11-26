export const expandImg = () => {
    const expandIcon = document.querySelectorAll(".fa-expand");
    const itemImage = document.querySelectorAll(".itemImage");
    expandIcon.forEach((element) => {
        element.addEventListener("click", () => {
            const img = document.querySelector(`.img${element.id}`);
            img.classList.toggle("min-w-full");
        });
    });
};
