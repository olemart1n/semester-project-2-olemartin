export const endOfQuery = () => {
    const queryString = document.location.href;
    const queryEnd = queryString.substring(queryString.lastIndexOf("/") + 1, queryString.length);
    return queryEnd;
};
