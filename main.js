import "./style.css";
import { authenticationRouter } from "./js/authentication/index.js";
import { homeRouter } from "./js/router/index.js";
import { navRouter } from "./js/tools/UI/index.js";
import { filter } from "./js/filters/sortBy.js";
import { save, load, refreshKey } from "./js/storage/index.js";
if (load("location") === null) {
    save("location", "/semester-project-2-olemartin/");
}
document.querySelector("h1").addEventListener("click", () => {
    refreshKey("/semester-project-2-olemartin/");
});
document.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && e.target.origin === location.origin) {
        //     // don't ask the server for that resource!
        e.preventDefault();
        window.history.replaceState({}, null, e.target.href);
        // console.log(window.history.go());
        window.history.go();
        if (load("location") !== e.target.href) {
            refreshKey(
                e.target.href.substring(e.target.href.lastIndexOf("/") + 1, e.target.href.length)
            );
        }
        console.log(e.target);
    }
});

authenticationRouter();
navRouter();
homeRouter();
filter();
