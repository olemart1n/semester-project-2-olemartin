import { apiRequest } from "../tools/fetch.js";
import { fetchOptions, endpoints } from "../endpoints.js";
import { save } from "../storage/save.js";
import { form, successAlert, warningAlert } from "./formElements.js";
const { login } = endpoints;
const { registerLogin } = fetchOptions;
export const loginRequest = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const inputs = Object.fromEntries(form.entries());
        const { email } = inputs;
        registerLogin.body = JSON.stringify(inputs);
        apiRequest(login, registerLogin).then((data) => {
            if (data.email === email) {
                const { name, email, credits, avatar, accessToken } = data;
                console.log(data);
                successAlert.classList.remove("hidden");
                save("auctionToken", accessToken);
                save("name", name);
                save("credits", credits);
                save("email", email);
                save("avatar", avatar);
                setTimeout(() => {
                    save("authed", "true");
                    save("page", "index");
                    window.location.reload();
                }, 2000);
            } else if (data.statusCode === 401) {
                warningAlert.classList.remove("hidden");
                warningAlert.textContent = data.errors[0].message;
            }
        });
    });
};
