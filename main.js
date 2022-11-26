import "./style.css";
import { authenticationRouter } from "./js/authentication/index.mjs";
import { homeRouter } from "./js/home/index.mjs";

authenticationRouter();
homeRouter();
