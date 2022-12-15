export const viewBids = (btn, section, bidsArray) => {
    if (bidsArray.length === 0) {
        section.remove();
        btn.remove();
    }
    bidsArray.forEach((element) => {
        section.insertAdjacentHTML(
            "beforeend",
            `
        <div class="w-full text-auctionGrey flex">
        <p class="w-full text-auctionGrey text-center">${element.bidderName}</p>
        <p class="w-full text-auctionGrey text-center">${element.amount} $</p>
        </div>
        `
        );
    });
    btn.addEventListener("click", (e) => {
        section.classList.toggle("hidden");
    });
};
