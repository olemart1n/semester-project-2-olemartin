import "./style.css";
import { authenticationRouter } from "./js/authentication/index.js";
import { homeRouter } from "./js/router/index.js";
import { filterRouter } from "./js/filters/index.js";
import { navRouter } from "./js/tools/UI/index";
authenticationRouter();
navRouter();
filterRouter();
homeRouter();
