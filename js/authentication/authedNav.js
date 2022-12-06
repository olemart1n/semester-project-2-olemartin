const linkOne = document.querySelector("#nav-link-1");
const linkTwo = document.querySelector("#nav-link-2");

export const authedNav = () => {
    linkOne.textContent = "Profile";
    linkOne.href = "../home/";
    linkTwo.addEventListener("click", () => localStorage.clear());
    linkTwo.href = "/";
    linkTwo.textContent = "Logout";
    document.title = "Feed | AuctionHouse";
};
