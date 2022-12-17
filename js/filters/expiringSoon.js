import { feedLayoutNr2 } from "../feed/feedLayoutNr2.js";
import { apiRequest } from "../tools/fetch.js";
import { expandImg } from "../feed/expandImg.js";
import { timeGap } from "../tools/timeCalc/definitions.js";
import { closeToExp } from "../tools/timeCalc/timeLeft.js";
import { counterContainer } from "../tools/timeCalc/countdown.js";
import { expireSoonFeed, h2Header } from "../queryselectors.js";
import { getToItem } from "../item/getToItem.js";

export const expiringSoon = async (start, end) => {
    let finalArray = [];
    let i = start;
    expireSoonFeed.innerHTML = "";
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
            expireSoonFeed.insertAdjacentHTML("beforeend", feedLayoutNr2(element));
            counterContainer(id, defined);
            getToItem(id);
        }
    });
    expandImg();
};
// if (array.includes(value) === false) array.push(value);
