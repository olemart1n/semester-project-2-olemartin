import { load } from "./storage/index.js";
export const endpoints = {
    base: "https://api.noroff.dev/api/v1/auction/",
    register: "auth/register",
    login: "auth/login",
    account: "profiles/" + load("name") + "?_listings=true",
    listings: "listings",
    profiles: "profiles",
    editAvatar: "profiles/" + load("name") + "/media",
};
export const { base } = endpoints;

const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${load("auctionToken")}`,
};

export const fetchOptions = {
    registerLogin: {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: {},
    },
    getWithJwt: {
        method: "GET",
        headers: header,
    },
    entry: {
        method: "POST",
        headers: header,
        body: {},
    },
    update: {
        method: "PUT",
        headers: header,
        body: {},
    },
    deleteOpt: {
        method: "DELETE",
        headers: header,
    },
    react: {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("socialToken")}`,
        },
    },
};
