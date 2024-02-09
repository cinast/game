console.log("-main-")
import * as u from "./router/runtime";

u.PageTurnVisitable("laod",false)


const canvas = document.getElementById("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

let w = (canvas.width = window.innerWidth);
let h = (canvas.height = window.innerHeight);
ctx.globalAlpha = 1;

function update() {}

