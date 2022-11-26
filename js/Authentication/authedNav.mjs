const linkOne = document.querySelector("#nav-link-1");
const linkTwo = document.querySelector("#nav-link-2");

export const authedNav = () => {
    linkOne.textContent = "Profile";
    linkOne.href = "./home/";
    linkTwo.href = "./home/bids.html";
    linkTwo.textContent = "Your bids";
    document.title = "Feed | AuctionHouse";
};
