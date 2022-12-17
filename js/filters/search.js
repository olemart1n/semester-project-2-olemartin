import { apiRequest } from "../tools/fetch.js";
import { debounce } from "../tools/debounce.js";
import { authCheck } from "../tools/authCheck.js";
import { fetchOptions } from "../endpoints.js";
import { renderTitles, renderTags, renderUsers } from "./renderSearch.js";
import { byUserButton } from "./htmlElements.js";
import { searchForm } from "../queryselectors.js";
const { getWithJwt } = fetchOptions;
export const search = () => {
    searchForm.addEventListener(
        "input",
        debounce((e) => {
            searchAPI(e);
        }, 1000)
    );
};

const searchAPI = (e) => {
    apiRequest("listings").then((data) => {
        const tags = data.filter((post) => {
            const test = Boolean(
                post.tags
                    .map((tag) => tag.toLowerCase())
                    .filter((tag) => tag.includes(e.target.value)).length
            );
            return test;
        });
        const titles = data.filter((post) => post.title.includes(e.target.value));
        renderTitles(titles);
        renderTags(tags);
    });
    if (authCheck()) {
        apiRequest("profiles", getWithJwt).then((data) => {
            const users = data.filter((user) => user.name.includes(e.target.value));
            renderUsers(users);
            console.log(data);
        });
    } else {
        byUserButton.remove();
    }
};
