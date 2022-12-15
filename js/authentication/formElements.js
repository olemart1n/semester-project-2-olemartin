import { createElement } from "../tools/factory";
//WRAPPER
export const wrapper = createElement("div", { class: "mx-auto w-full mt-15  md:mx-auto md:w-1/2" });
//FORM ELEMENT
export const form = createElement("form", {
    class: "mt-8 space-y-6 flex flex-col justify-center",
    method: "POST",
});
//REGISTER FORM
export const regForm = form.cloneNode(true);

// EMAIL
const emailDiv = createElement("div", { class: "" });
const emailInput = createElement("input", {
    class: "bg-logoBg relative block w-full appearance-none border border-auctionBlue px-3 py-2 focus:outline-auctionBrown",
    type: "email",
    placeholder: "email",
    name: "email",
    pattern: "^[\\w\\-.]+@(stud.)?noroff.no$",
    title: "use a @stud.noroff.no mail-adress",
    required: "required",
});
const nameDiv = emailDiv.cloneNode(true);
emailDiv.append(emailInput);
//REGISTER EMAIL AND NAME
const nameInput = createElement("input", {
    class: "bg-logoBg relative block w-full appearance-none border border-auctionBlue px-3 py-2 focus:outline-auctionBrown",
    title: "uppercase, lowercase and (_) allowed",
    placeholder: "name",
    type: "text",
    name: "name",
    pattern: "[\\w]+$",
});

const regEmailDiv = emailDiv.cloneNode(true);
nameDiv.append(nameInput);

//PASSWORD
const passwordDiv = createElement("div", { class: "" });
const passwordInput = createElement("input", {
    class: "bg-logoBg relative block w-full appearance-none border border-auctionBlue px-3 py-2 focus:outline-auctionBrown",
    type: "password",
    placeholder: "password",
    name: "password",
    minlength: "8",
    required: "required",
});
passwordDiv.append(passwordInput);
// REG PASSWORD
const regPasswordDiv = passwordDiv.cloneNode(true);

// SUBMIT BUTTON
const submitButton = createElement("button", {
    type: "submit",
    class: "bg-auctionBlue text-almostWhite p-1  rounded-sm  mx-auto",
});
submitButton.innerHTML = "Login";

// REGSUBMIT BUTTON
const regSubmitButton = submitButton.cloneNode(true);
regSubmitButton.innerHTML = "Register";
// SUCCESS ALERT
export const successAlert = createElement("div", {
    class: "bg-auctionBlue rounded text-center hidden",
    id: "login-success-alert",
});
// REG SUCCES ALERT
export const regSuccessAlert = successAlert.cloneNode(true);
regSuccessAlert.innerHTML = "Account successfully created";
successAlert.innerHTML = "Login successful";
// WARNING ALERT
export const warningAlert = createElement("div", {
    class: "bg-auctionRed rounded text-center hidden",
    id: "login-warning-alert",
});
// APPEND ELEMENTS INTO THE FORM ------------------------------------------------------------------------------
form.append(emailDiv, passwordDiv, submitButton, successAlert, warningAlert);

// REGISTER LINK
const registerLinkDiv = createElement("div", {
    class: "flex flex-col items-center justify-between mt-3",
});
const aSpan = createElement("span", { class: "text-auctionGrey mx-auto" });
aSpan.innerHTML = "OR";
const anchorDiv = createElement("div", { class: "text-md mt-5 mx-auto" });
const registerLink = createElement("a", {
    class: "text-almostWhite bg-auctionGrey opacity-50 p-1 ml-1 rounded-sm hover:text-indigo-500",
    href: "./register",
});
registerLink.innerHTML = "Create an accocunt";
anchorDiv.append(registerLink);
registerLinkDiv.append(aSpan, registerLink);
wrapper.append(form, registerLinkDiv);

// REGISTER RELATED ELEMENTS

export const regWrapper = createElement("div", {
    class: "mx-auto w-full mt-15  md:mx-auto md:w-1/2",
});

export const regWarningAlert = warningAlert.cloneNode(true);
regForm.append(
    nameDiv,
    regEmailDiv,
    regPasswordDiv,
    regSubmitButton,
    regSuccessAlert,
    regWarningAlert
);
regWrapper.append(regForm);
