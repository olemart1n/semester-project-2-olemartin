import { hour, day, timeGap } from "./definitions.js";
// export const timeLeft = (endsAt) => {
//     const expiryDate = new Date(endsAt);
//     const now = new Date();
//     const gap = expiryDate - now;
//     const hoursLeft = Math.floor(gap % day) / hour;
//     const minsLeft = Math.floor(gap % hour) / min;
// };
// export const minLeft = (endsAt) => {
//     const minsLeft = Math.floor(timeGap() % hour) / min;
//     return minsLeft;
// };
export const hourLeft = (endsAt, bids) => {
    const hoursLeft = Math.floor((timeGap(endsAt) % day) / hour);
    const currentBid = bids[bids.length - 1].amount;
    // console.log(Math.floor((timeGap(endsAt) % day) / hour));
    if (hoursLeft <= 0) {
        return '<span class="bg-auctionRed text-auctionGrey">' + "SOLD" + "</span>";
    }
    return (
        "<span>" + hoursLeft + " hours left" + "</span><span>Bid:" + currentBid + "$" + "</span>"
    );
};

export const currentBid = (bids) => {
    const currentBid = bids[bids.length - 1].amount;
    return "bid: " + currentBid + " " + "$";
};
