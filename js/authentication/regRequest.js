import { apiRequest } from "../tools/fetch";
import { save } from "../storage/save";
import { fetchOptions, endpoints } from "../endpoints.mjs";
const { register, login } = endpoints;
const { registerLogin } = fetchOptions;
const registerForm = document.querySelector("#authenticateForms");
const successMessage = document.querySelector("#register-success-message");
const errorMessage = document.querySelector("#register-error-message");
export const registerNewAccount = () => {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const inputs = Object.fromEntries(form.entries());
        const { name } = inputs;
        registerLogin.body = JSON.stringify(inputs);
        console.log(registerLogin.body);
        apiRequest(register, registerLogin).then((data) => {
            if (data.name === name) {
                console.log(data);
                successMessage.classList.remove("hidden");
                setTimeout(() => {
                    apiRequest(login, registerLogin).then((data) => {
                        const { name, email, credits, avatar, accessToken } = data;
                        save("auctionToken", accessToken);
                        save("name", name);
                        save("credits", credits);
                        save("email", email);
                        save("avatar", avatar);
                        setTimeout(() => {
                            window.location.replace("/feed");
                        }, 2000);
                    });
                }, 2000);
            } else if (data.status === "Bad Request") {
                errorMessage.classList.remove("hidden");
                errorMessage.textContent = data.errors[0].message;
            }
        });
    });
};
