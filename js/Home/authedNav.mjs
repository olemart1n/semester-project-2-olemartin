const linkOne = document.querySelector("#nav-link-1");
const linkTwo = document.querySelector("#nav-link-2");

export const authedNav = () => {
    linkOne.textContent = "Profile";
    linkTwo.textContent = "Your bids";
    console.log("HIII");
};
