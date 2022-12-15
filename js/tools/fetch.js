import { base } from "../endpoints.js";
export const apiRequest = async (endpoint, header) => {
    try {
        const request = await fetch(base + endpoint, header);
        const response = await request.json();
        return response;
    } catch (error) {
        console.error(error);
    }
};
