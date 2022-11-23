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
export const hourLeft = (endsAt) => {
    const hoursLeft = Math.floor((timeGap(endsAt) % day) / hour);
    // console.log(Math.floor((timeGap(endsAt) % day) / hour));
    console.log(typeof hoursLeft);
    if (hoursLeft <= 0) {
        return "expired";
    }
    return "hours left" + " " + hoursLeft;
};
