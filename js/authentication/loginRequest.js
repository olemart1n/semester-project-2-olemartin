import { apiRequest } from "../tools/fetch.js";
import { fetchOptions, endpoints } from "../endpoints.js";
import { save } from "../storage/save.js";
const { login } = endpoints;
const { registerLogin } = fetchOptions;
const submitButton = document.querySelector("#submit-button");
const loginForm = document.querySelector("#authenticateForms");
const successMessage = document.querySelector("#login-success-message");
const errorMessage = document.querySelector("#login-error-message");
export const loginRequest = () => {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const inputs = Object.fromEntries(form.entries());
        const { email } = inputs;
        registerLogin.body = JSON.stringify(inputs);
        apiRequest(login, registerLogin).then((data) => {
            if (data.email === email) {
                const { name, email, credits, avatar, accessToken } = data;
                console.log(data);
                successMessage.classList.remove("hidden");
                save("auctionToken", accessToken);
                save("name", name);
                save("credits", credits);
                save("email", email);
                save("avatar", avatar);
                setTimeout(() => {
                    window.location.replace("/feed");
                }, 2000);
            } else if (data.statusCode === 401) {
                errorMessage.classList.remove("hidden");
                errorMessage.textContent = data.errors[0].message;
            }
        });
    });
};
