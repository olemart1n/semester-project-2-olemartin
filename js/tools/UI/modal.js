export let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    //add the modal to the mai nsection or the parent element
    document.querySelector("main").append(modal);
    const newImage = document.createElement("figure");
    newImage.style.backgroundImage = `url("${src}")`;
    modal.append(newImage);
    modal.addEventListener("click", () => {
        document.querySelector(".modal").remove();
    });
};
