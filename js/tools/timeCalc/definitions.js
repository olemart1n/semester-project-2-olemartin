export const sec = 1000;
export const min = sec * 60;
export const hour = min * 60;
export const day = hour * 24;

export const timeGap = (endsAt) => {
    const expiryDate = new Date(endsAt);
    const now = new Date();
    const gap = expiryDate - now;
    return gap;
};

export const aDay = (endsAt) => {
    const expiryDate = new Date(endsAt);
    const now = new Date();
    const gap = expiryDate - now;
    const gapArr = [];
    if (gap < 86400000) {
        gapArr.push[gap];
    }
    return gapArr;
};
