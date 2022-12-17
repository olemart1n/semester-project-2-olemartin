import { apiRequest } from "../tools/fetch.js";
import { regForm, regSuccessAlert, regWarningAlert } from "./formElements.js";
import { save } from "../storage/save.js";
import { fetchOptions, endpoints } from "../endpoints.js";
const { register, login } = endpoints;
const { registerLogin } = fetchOptions;

export const registerNewAccount = () => {
    regForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const inputs = Object.fromEntries(form.entries());
        const { name } = inputs;
        registerLogin.body = JSON.stringify(inputs);
        console.log(registerLogin.body);
        apiRequest(register, registerLogin).then((data) => {
            if (data.name === name) {
                console.log(data);
                regSuccessAlert.classList.remove("hidden");
                setTimeout(() => {
                    apiRequest(login, registerLogin).then((data) => {
                        const { name, email, credits, avatar, accessToken } = data;
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
                    });
                }, 2000);
            } else if (data.status === "Bad Request") {
                regWarningAlert.classList.remove("hidden");
                regWarningAlert.textContent = data.errors[0].message;
            }
        });
    });
};
