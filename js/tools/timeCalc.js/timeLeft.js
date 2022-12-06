import { hour, day, timeGap } from "./definitions.js";
export const hourLeft = (endsAt, bids) => {
    const hoursLeft = Math.floor((timeGap(endsAt) % day) / hour);
    // const currentBid = bids[bids.length - 1].amount;
    let currentBid;
    if (bids.length > 0) {
        currentBid = bids[bids.length - 1].amount;
    } else {
        currentBid = "0";
    }
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

export const closeToExp = (input) => {
    let array = [...input];
    for (let i = 0; i < array.length; i++) {
        let hasSwapped = false;
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                let fire = array[j];
                array[j] = array[j + 1];
                array[j + 1] = fire;
                hasSwapped = true;
            }
        }
        if (!hasSwapped) {
            return array;
        }
    }
    return array;
};
