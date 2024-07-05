import { assets } from "../enter";
import * as ui from "../source/utils/ui";
import * as ut from "../source/utils/utils";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

let w = (canvas.width = window.innerWidth);
let h = (canvas.height = window.innerHeight);
ctx.globalAlpha = 1;

function update() {
    ctx.clearRect(0, 0, w, h);
    // for (const i of ) {
    //     i.update()
    // }
    requestAnimationFrame(update);
}
