import { fetchOptions, endpoints } from "../../endpoints.mjs";
import { apiRequest } from "../../tools/fetch.js";
const { deletE } = endpoints;
export const delte = () => {
    apiRequest(deletE).then((data) => console.log(data));
};
