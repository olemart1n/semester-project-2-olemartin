import { feedLayoutNr2 } from "../home/feed/feedLayoutNr2";
import { apiRequest } from "../tools/fetch";
import { expandImg } from "../home/feed/expandImg";
import { timeGap } from "../tools/timeCalc.js/definitions";
import { closeToExp } from "../tools/timeCalc.js/timeLeft";
import { oneCunterBox } from "../tools/timeCalc.js/countdown";
const listingsContainer = document.querySelector("#listingsFeed");
const h2Header = document.querySelector("#listingHeader");

// parameters gets changed if user click next page

export const expiringSoon = async (start, end) => {
    let i = start;
    listingsContainer.innerHTML = "";
    h2Header.innerHTML = "Expires today";
    await apiRequest("listings?_bids=true&sort=created&sortOrder=desc").then((data) => {
        const lessThanADay = data.filter((data) => {
            return timeGap(data.endsAt) < 86400000 && timeGap(data.endsAt) > 0;
        });
        const finalArray = lessThanADay.filter((data) => {
            return closeToExp(data.endsAt);
        });
        for (i = 0; i < end; i++) {
            const element = finalArray[i];
            if (element === undefined) {
                break;
            }
            const defined = element.endsAt;
            const id = element.id;
            listingsContainer.insertAdjacentHTML("beforeend", feedLayoutNr2(element));
            oneCunterBox(id, defined);
        }
    });
    expandImg();
};
