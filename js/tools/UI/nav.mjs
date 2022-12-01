const bar = document.querySelector("#navWithBar");
const barIcon = document.querySelector("#bar");
const searchIcon = document.querySelector("#zoomglass");
const searchInput = document.querySelector("#navWithSearch");
const filters = document.querySelector("#filters");
export const toggleNav = () => {
    barIcon.addEventListener("click", () => {
        bar.classList.toggle("hidden");
    });
};
export const toggleSearch = () => {
    searchIcon.addEventListener("click", () => {
        searchInput.classList.toggle("hidden");
        bar.classList.add("hidden");
        filters.classList.toggle("hidden");
    });
};
