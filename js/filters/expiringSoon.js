import { feedLayoutNr2 } from "../home/feed/feedLayoutNr2";
import { apiRequest } from "../tools/fetch";
import { expandImg } from "../home/feed/expandImg";
import { timeGap } from "../tools/timeCalc.js/definitions";
import { closeToExp } from "../tools/timeCalc.js/timeLeft";
import { counterContainer } from "../tools/timeCalc.js/countdown";
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
        const justTimeGaps = [];
        lessThanADay.forEach((element) => {
            justTimeGaps.push(element.endsAt);
        });
        const sorted = closeToExp(justTimeGaps);

        const finalArray = [];
        for (let i = 0; i < sorted.length; i++) {
            const element = sorted[i];
            for (let j = 0; j < lessThanADay.length; j++) {
                let currentEl = lessThanADay[j];
                if (lessThanADay[j].endsAt === element && !finalArray.includes(lessThanADay[j])) {
                    finalArray.push(currentEl);
                }
            }
        }
        // THE ARRAY WICH NOW HAS THE LISTING PROPERLU ARRANGED IS FINALARRAY
        for (i = 0; i < end; i++) {
            const element = finalArray[i];
            if (element === undefined) {
                break;
            }
            const defined = element.endsAt;
            const id = element.id;
            listingsContainer.insertAdjacentHTML("beforeend", feedLayoutNr2(element));
            counterContainer(id, defined);
        }
    });
    expandImg();
};
// if (array.includes(value) === false) array.push(value);
