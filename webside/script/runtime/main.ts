console.log("-main-");

import { assets } from "./enter";
import { World } from "../source/world";

let rc = new Worker("./rander");

const globalWorld = new World();
