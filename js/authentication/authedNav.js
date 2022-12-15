const linkOne = document.querySelector("#nav-link-1");
const linkTwo = document.querySelector("#nav-link-2");

export const authedNav = () => {
    linkOne.textContent = "Profile";
    linkOne.href = "/semester-project-2-olemartin/home";
    linkTwo.addEventListener("click", () => localStorage.clear());
    linkTwo.href = "/semester-project-2-olemartin/";
    linkTwo.textContent = "Logout";
    document.title = "Feed | AuctionHouse";
};
