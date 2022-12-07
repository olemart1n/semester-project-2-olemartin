import { apiRequest } from "../tools/fetch";
import { fetchOptions } from "../endpoints.mjs";

const userContainer = document.querySelector("#itemContainer");
const listingFeed = document.querySelector("#listingsFeed");
const mainTag = document.querySelector("main");
const filters = document.querySelector("#filters");
const h2Header = document.querySelector("#listingHeader");
const { getWithJwt } = fetchOptions;
export const renderUser = () => {
    console.log(userContainer);
    h2Header.addEventListener("click", () => {
        window.location.href = "/";
    });
    h2Header.innerHTML = "&#x2190; back";

    const queryString = document.location.href;
    const queryUser = queryString.substring(queryString.lastIndexOf("/") + 1, queryString.length);
    const userFetch = `profiles/${queryUser}`;

    apiRequest(userFetch, getWithJwt).then((data) => console.log(data));
};
