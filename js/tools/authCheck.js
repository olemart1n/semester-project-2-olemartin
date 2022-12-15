export const authCheck = () => {
    if (
        localStorage.getItem("auctionToken") === null ||
        localStorage.getItem("auctionToken") === "undefined"
    ) {
        return false;
    }
    return true;
};
