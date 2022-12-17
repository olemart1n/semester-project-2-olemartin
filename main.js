import "./style.css";
import { router } from "./js/router.js";
import { filter, loggedInFilter } from "./js/filters/index.js";
import { index } from "./js/index/index.js";
index();
filter();
loggedInFilter();
router();
