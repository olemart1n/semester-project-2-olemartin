import "./style.css";
import { authenticationRouter } from "./js/authentication/index.js";
import { homeRouter } from "./js/router/index.js";
import { navRouter } from "./js/tools/UI/index";
import { filterRouter } from "./js/filters/filterRouter";
filterRouter();
authenticationRouter();
navRouter();
homeRouter();
